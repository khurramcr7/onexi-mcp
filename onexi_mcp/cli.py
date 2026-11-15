# -*- coding: utf-8 -*-
"""ONE XI Enterprise Cloud MCP Zero-IP Python Proxy (onexi-mcp v9.2.0)."""
import json
import os
import sys
import urllib.request

ENDPOINT = os.environ.get("ONE_MCP_ENDPOINT", "https://www.onexi.tech/api/mcp")
API_KEY = (os.environ.get("ONE_MCP_API_KEY") or os.environ.get("ONEXI_API_KEY") or "").strip()


def main() -> None:
    if "--version" in sys.argv or "-v" in sys.argv:
        sys.stdout.write("9.2.0\n")
        return
    if "--help" in sys.argv or "-h" in sys.argv:
        sys.stdout.write(
            "ONE XI Enterprise Cloud MCP Proxy v9.2.0\n"
            f"Endpoint: {ENDPOINT}\n"
            "Portal & API Keys: https://www.onexi.tech/mcp\n"
        )
        return

    session_id = ""
    for line in sys.stdin:
        raw = line.strip()
        if not raw:
            continue
        headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
            "X-One-Mcp-Client": "pypi-stdio-9.2.0",
        }
        if API_KEY:
            headers["Authorization"] = f"Bearer {API_KEY}"
        if session_id:
            headers["Mcp-Session-Id"] = session_id

        req = urllib.request.Request(ENDPOINT, data=raw.encode("utf-8"), headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=35) as resp:
                sid = resp.headers.get("Mcp-Session-Id")
                if sid:
                    session_id = sid
                if resp.status in (202, 204):
                    continue
                body = resp.read().decode("utf-8").strip()
                if body:
                    sys.stdout.write(body + "\n")
                    sys.stdout.flush()
        except Exception as exc:
            req_id = None
            try:
                parsed = json.loads(raw)
                if isinstance(parsed, dict) and "id" in parsed:
                    req_id = parsed["id"]
            except Exception:
                pass
            if req_id is not None:
                err = {"jsonrpc": "2.0", "id": req_id, "error": {"code": -32000, "message": str(exc)}}
                sys.stdout.write(json.dumps(err) + "\n")
                sys.stdout.flush()


if __name__ == "__main__":
    main()
