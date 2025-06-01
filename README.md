# 🎨 ArtCrate - NFT Platform with Creator Rewards

A Decentralized NFT platform built on Lisk Sepolia where creators earn tokens when users mint their NFTs. Built with modern Web3 technologies and best practices.

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

Built with React + ethers.js:

- Connect to MetaMask
- Upload image & metadata to IPFS
- Mint NFTs and get confirmation
- Display token balance and mint logs
- Browse NFT gallery with metadata and creator info

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+)
- MetaMask wallet
- Lisk Sepolia testnet account
- IPFS key for Pinata or NFT.Storage

### Clone the Repository

```bash
git clone https://github.com/oumaoumag/artcrate-scaffold-lisk.git
cd artcrate-scaffold-lisk 
```

### Install Dependencies

```bash
# Install smart contract tools
cd contracts
forge install

# Compile & deploy contracts (using Hardhat)
npx hardhat compile
npx hardhat run scripts/deploy.js --network liskSepolia
# Ensure your Hardhat configuration is set up for the Lisk Sepolia network

# Install frontend dependencies
cd ../frontend
yarn install
```

### Run the App

```bash
yarn start
```

---

## 📄 License

MIT License. See `LICENSE` file for details.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to change or add.
