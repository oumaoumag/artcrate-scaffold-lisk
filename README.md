# 🎨 ArtCrate - NFT Platform with Creator Rewards

A Decentralized NFT platform built on Lisk Sepolia where creators earn tokens when users mint their NFTs. Built with modern Web3 technologies and best practices.

---

## 🚀 Live Deployment

**Frontend**:

**Smart Contract**: 
  **Smart Contract-v1** 
**Network**: Lisk Sepolia Testnet

**Explorer**: [View Contract]()

---

## 🚀 Features

- ✅ **ERC721 NFT Collection**
  Mint NFTs with metadata and assign creator attribution.

- 💰 **ERC20 Token Rewards**
  Creators earn a fixed amount of tokens for every NFT minted by others.

- 🌐 **IPFS Integration**
  Metadata and images are stored on IPFS using Pinata or NFT.Storage.

- 👛 **Web3 Wallet Support**
  Connect MetaMask and interact with smart contracts directly from the UI.

- 🖼️ **NFT Gallery**
  Browse all minted NFTs with creator addresses and token IDs.

- 📊 **Reward Dashboard**
  Track token balances and minting events in real time.

---

## 🧱 Smart Contracts

### `ArtNFT.sol`
- ERC721-compatible NFT contract.
- Public minting with metadata URI.
- Tracks original creator of each NFT.
- Emits `NFTMinted` event on mint.
- Calls `rewardCreator()` from ERC20 token.

### `CreatorToken.sol`
- ERC20-compatible token.
- Minted internally by the contract to reward creators.
- Functions: `rewardCreator`, `balanceOf`, `transfer`, `approve`, `transferFrom`, `allowance`.

---

## 🖥 Frontend

Built with Next.js, RainbowKit, Wagmi, Viem, and TypeScript:

- Connect to MetaMask
- Upload image & metadata to IPFS
- Mint NFTs and get confirmation
- Display token balance and mint logs
- Browse NFT gallery with metadata and creator info

---

# 🛠️ Getting Started

## Prerequisites

- Node.js: v18.x or v20.x (LTS recommended; avoid v23+ as Hardhat does not support it)
- Yarn: v1 or v2+ ([Install Yarn](https://classic.yarnpkg.com/en/docs/install/))
- Git: For version control
- MetaMask: For wallet integration
- .env setup: Copy `.env.example` to `.env` in `packages/hardhat` and set your private key and API keys

## Monorepo Structure

- `packages/hardhat`: All smart contract code, deployment scripts, and tests (TypeScript, Hardhat, hardhat-deploy)
- `packages/nextjs`: Frontend (Next.js, RainbowKit, Wagmi, Viem, TypeScript)

## Quickstart

### 1. Clone and Install

```bash
git clone https://github.com/oumaoumag/artcrate-scaffold-lisk.git
cd artcrate-scaffold-lisk
yarn install
```

### 2. Local Development

**Start a local Hardhat chain:**
```bash
yarn chain
# (Runs Hardhat node for local testing)
```

**Deploy contracts to local chain:**
```bash
yarn deploy
# (Deploys contracts using scripts in packages/hardhat/deploy)
```

**Start the frontend:**
```bash
cd packages/nextjs
yarn dev
# Visit http://localhost:3000
```

### 3. Deploy to Lisk Sepolia or Other Testnets

**Set up your environment:**
- In `packages/hardhat`, copy `.env.example` to `.env` and set `DEPLOYER_PRIVATE_KEY` and any required API keys.

**Deploy:**
```bash
yarn deploy --network liskSepolia
```
- The network name must match one defined in `hardhat.config.ts`.
- Ensure your account has testnet ETH.

### 4. Testing and Linting

**Run contract tests:**
```bash
cd packages/hardhat
yarn test
```

**Lint and format code:**
```bash
yarn lint
yarn format
```

### 5. Best Practices & Troubleshooting

- Node Version: Always use a supported Node.js version. Use `nvm` to manage versions.
- Compiler Version: Always specify `pragma solidity ^0.8.17;` or higher in your contracts for security and compatibility.
- Deployment Scripts: Ensure all deploy scripts in `packages/hardhat/deploy` export a function as default. Do not leave scripts fully commented out.
- Environment Variables: Never commit secrets. Use `.env` for private keys and API keys.
- CI/CD: Integrate contract compilation, linting, and tests in your CI pipeline for robust deployments.
- Documentation: Keep this README and in-code comments up to date. Document any custom scripts or processes.

### 6. Advanced

- Forking Mainnet: Use `yarn fork` to run a local fork of Ethereum mainnet for advanced testing.
- Account Management: Use `yarn generate` to create new deployer accounts and `yarn account` to check balances.
- Typechain: Type-safe contract bindings are auto-generated for TypeScript development.

---

## Resources

- [Scaffold-ETH2 Docs](https://docs.scaffoldeth.io)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Lisk Sepolia Explorer](https://sepolia-blockscout.lisk.com/)

---

## 📄 License

MIT License. See `LICENSE` file for details.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change or add.
