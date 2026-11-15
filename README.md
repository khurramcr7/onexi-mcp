# ONE XI™ Enterprise Cloud MCP Server (`@onexi/mcp-server` / `onexi-mcp` v9.2.0)

Connect **Claude Desktop & Web**, **Cursor**, **Google Antigravity IDE**, **Windsurf**, **VS Code Copilot**, and **OpenAI ChatGPT Actions** directly to the **ONE XI™ Enterprise Cloud Model Context Protocol (MCP) Server**:

- **Remote Streamable HTTP Endpoint**: `https://www.onexi.tech/api/mcp`
- **Interactive Storefront & Playground**: `https://www.onexi.tech/mcp`
- **OpenAPI 3.1 Actions Schema**: `https://www.onexi.tech/api/mcp/openapi.json`

---

## 12 Deterministic ONE XI™ MCP Suites

| Tool Name | Domain | Access Tier |
| :--- | :--- | :--- |
| `onexi_zeroh_verify_claim` | Deterministic Claim & Citation Verification Gate | Free Trial (15/day) + Paid |
| `onexi_quran_concordance` | Authentic Uthmānī Qur'anic Concordance, Root & Tafsīr | Free Trial (15/day) + Paid |
| `onexi_hadith_shuruh_verify` | Canonical Hadith Grading & 6-Book Shurūḥ Synthesis | Free Trial (15/day) + Paid |
| `onexi_clinical_pulse_ruo` | Cardiovascular & Multi-Organ Hemodynamic Digital Twin (RUO) | MCP Pro ($29/mo+) |
| `onexi_genesis_variant_screen` | Proteomics CDS & Clinical Variant Pathogenicity Cloud | MCP Pro ($29/mo+) |
| `onexi_quantum_circuit_compile` | Fault-Tolerant Quantum Adder, QROM & Ancilla Compiler | MCP Pro ($29/mo+) |
| `onexi_science_registry` | 16-Registry Scientific Grounding & 2026–2030 Point Predictions | Personal ($10/mo+) |
| `onexi_algorithmic_mastery` | 24-Archetype Recommender & C++20 / Python 3 Live Sandbox | Personal ($10/mo+) |
| `onexi_coding_sciences_audit` | Package/OSV Security Intelligence & Static Invariant Audit | Personal ($10/mo+) |
| `onexi_kutublink_heritage_search` | 578 Vocalized Classical Works (121.8M Words) & Aalim Books | Personal ($10/mo+) |
| `onexi_mcp_catalog` | Suite Discovery & Live Subscription Quota Inspector | Always Free |
| `onexi_billing_checkout_concierge` | Instant Checkout Links & In-Agent License Activation | Always Free |

---

## Quick Setup

### Option A — Direct Remote Streamable HTTP (Cursor / Antigravity / Windsurf / VS Code)

```json
{
  "mcpServers": {
    "onexi-mcp": {
      "url": "https://www.onexi.tech/api/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_ONEXI_API_KEY"
      }
    }
  }
}
```

### Option B — Zero-Dependency `npx` Bridge (Claude Desktop / Any Stdio Client)

```json
{
  "mcpServers": {
    "onexi-mcp": {
      "command": "npx",
      "args": ["-y", "https://www.onexi.tech/downloads/onexi-mcp-server-9.2.0.tgz"],
      "env": {
        "ONE_MCP_API_KEY": "YOUR_ONEXI_API_KEY"
      }
    }
  }
}
```

### Option C — Python `uvx` / `pip` Bridge

```bash
ONE_MCP_API_KEY=YOUR_ONEXI_API_KEY uvx --from https://www.onexi.tech/downloads/onexi_mcp-9.2.0-py3-none-any.whl onexi-mcp
```

---

## Self-Serve Subscriptions & Passes

- **Free Discovery Trial ($0)**: 15 calls/day on starter verification & concordance suites — no card required.
- **Personal Cloud + Core MCP ($10/mo)**: https://buy.polar.sh/polar_cl_zJp0574w11ZEwCC5wxHFYFEkJ2VmokihtfuZz0XJnOn
- **ONE XI™ MCP Pro — All 12 Suites ($29/mo · Recommended)**: https://buy.polar.sh/polar_cl_cRVWbckcAFCWFaqFW0bFTy7iY5J7BsmBfB7aQ2IlO7M
- **Pro Lab 5-Seat Team Pass ($199)**: https://buy.polar.sh/polar_cl_2rGWKtRrTpFyrMjKTRwRSv9Cb8F4FZmvW322i16kIwX
- **Manage & Redeem License Keys**: https://www.onexi.tech/mcp

© ONE XI Technologies by Aalimbooks International (`onexi.tech` | `onexibio.com`). All proprietary engines execute inside the 100% Black-Box ONE XI™ Cloud Vault.
