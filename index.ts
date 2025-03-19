import { MCPClient } from './mcp-client'

async function main() {
  if (process.argv.length < 3) {
    console.error('Usage: node index.js <path_to_server_script>')
    return
  }
  const serverScriptPath = process.argv[2]!
  const mcpClient = new MCPClient()
  try {
    await mcpClient.connectToServer(serverScriptPath)
    await mcpClient.chatLoop()
  } finally {
    await mcpClient.cleanup()
    process.exit(0)
  }
}

main()
