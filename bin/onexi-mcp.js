#!/usr/bin/env node
/**
 * ONE XI Enterprise Cloud MCP Zero-IP Stdio Proxy (@onexi/mcp-server v9.2.0)
 * Contains zero proprietary model weights or equations; forwards JSON-RPC 2.0
 * messages over HTTPS to https://www.onexi.tech/api/mcp.
 */
"use strict";

const readline = require("node:readline");

const ENDPOINT = process.env.ONE_MCP_ENDPOINT || "https://www.onexi.tech/api/mcp";
const API_KEY = (
  process.env.ONE_MCP_API_KEY ||
  process.env.ONEXI_API_KEY ||
  ""
).trim();

const argv = process.argv.slice(2);
if (argv.includes("--version") || argv.includes("-v")) {
  process.stdout.write("9.2.0\n");
  process.exit(0);
}
if (argv.includes("--help") || argv.includes("-h")) {
  process.stdout.write(
    "ONE XI Enterprise Cloud MCP Proxy v9.2.0\n" +
      "Endpoint: " + ENDPOINT + "\n" +
      "Get or manage your API key at: https://www.onexi.tech/mcp\n"
  );
  process.exit(0);
}

let sessionHeader = "";

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

rl.on("line", async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-One-Mcp-Client": "npm-stdio-9.2.0",
  };
  if (API_KEY) {
    headers["Authorization"] = "Bearer " + API_KEY;
  }
  if (sessionHeader) {
    headers["Mcp-Session-Id"] = sessionHeader;
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers,
      body: trimmed,
    });
    const sid = res.headers.get("mcp-session-id");
    if (sid) sessionHeader = sid;
    if (res.status === 202 || res.status === 204) return;
    const text = (await res.text()).trim();
    if (text) {
      process.stdout.write(text + "\n");
    }
  } catch (err) {
    let id = null;
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, "id")) id = parsed.id;
    } catch {}
    if (id !== null) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          error: { code: -32000, message: String(err && err.message ? err.message : err) },
        }) + "\n"
      );
    }
  }
});
