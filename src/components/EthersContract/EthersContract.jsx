import React, { useEffect } from 'react'


// const ethers = require("ethers");
// import { Contract, getBytes } from "ethers";
// import { Wallet } from "ethers";
// import { JsonRpcProvider } from "ethers";
import { ethers, providers } from "ethers";
// const { BigNumber } = require('ethers')
// console.log("🚀 ~ file: index.js:5 ~ BigNumber:", BigNumber)

// import { BigNumber } from 'ethers';
// const  BigNumber  = require("@ethersproject/bignumber");
function getVRS(signature) {
    // Manually split the signature
    signature = signature.substring(2)
    const r = '0x' + signature.substring(0, 64)
    const s = '0x' + signature.substring(64, 128)
    const v = parseInt(signature.substring(128, 130), 16)// Last byte (2 hex characters)
    return { v, r, s };
}
const main = async () => {
    // console.log("🚀 ~ file: index.js:10 ~ main ~ main:")

    //     const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/xwWdDUaDPwk1y6GqGB8IRkcXd7TmUKJx'))

    //     const pair = '0x337b11f4f1c61e36eae72cd2ec33a8aa67e810aa'
    //     const contract1 = await new web3.eth.Contract(v2_pool_abi, pair)

    //     const contract = await new web3.eth.Contract(priceEstimator,'0xbac8A35962BA5bb018C03EE1d936B13eE023c417');
    //     const reserves = await contract1.methods.getReserves().call()
    //     const reserve_dweb = reserves[0]
    //     console.log("🚀 ~ file: index.js:16 ~ main ~ reserve_dweb:", reserve_dweb,typeof reserve_dweb)

    //     try {
    //         // const temp = BigNumber.from(reserve_dweb);
    //         // console.log("🚀 ~ file: index.js:20 ~ main ~ temp:", temp)
    //         // const result = await contract.methods.getEstimatedERC20forETH(temp,'0x986C46aD7c680182d4e476De2db10a15b1426D47').call()
    //         // console.log("🚀 ~ file: index.js:14 ~ main ~ result:", result)
    //     } catch (error) {
    //         console.log("🚀 ~ file: index.js:21 ~ main ~ error:", error)

    //     }

    // const reserves = await contract.methods.getReserves().call()
    // console.log("🚀 ~ file: index.js:10 ~ reserves:", reserves)
    // const reserve_dweb = reserves[0]
    // console.log("🚀 ~ file: index.js:12 ~ reserve_dweb:", reserve_dweb)
    // const total_supply = await contract.methods.totalSupply().call()
    // console.log("🚀 ~ file: index.js:14 ~ total_supply:", total_supply)
    // const priceOfReserveDweb = await contract.methods.price0CumulativeLast().call();
    // console.log("🚀 ~ file: index.js:18 ~ main ~ priceOfReserveDweb:", priceOfReserveDweb)
    // const priceOfReserveWeth = await contract.methods.price1CumulativeLast().call();
    // console.log("🚀 ~ file: index.js:18 ~ main ~ priceOfReserveWeth:", priceOfReserveWeth)

    // const totalpriceofreservedweb = reserve_dweb * priceOfReserveDweb;
    // console.log("🚀 ~ file: index.js:23 ~ main ~ totalpriceofreservedweb:", totalpriceofreservedweb)
    // const totalpriceofreserveweth = reserves[1] * priceOfReserveWeth;
    // console.log("🚀 ~ file: index.js:25 ~ main ~ totalpriceofreserveweth:", totalpriceofreserveweth)

    // const lp_address = '0x337b11F4f1C61E36EAE72cD2eC33A8AA67E810Aa'
    // const lp_balance = await contract.methods.balanceOf(lp_address).call()
    // console.log("🚀 ~ file: index.js:20 ~ main ~ lp_balance:", lp_balance)
    // const lp_dweb = reserve_dweb * lp_balance / total_supply
    // console.log("🚀 ~ file: index.js:22 ~ main ~ lp_dweb:", lp_dweb)
    // const dweb_decimals = 18
    // const lp_usdc_adjusted = lp_dweb / 10 ** dweb_decimals
    // console.log("🚀 ~ file: index.js:25 ~ main ~ lp_usdc_adjusted:", lp_usdc_adjusted)

    const RewardMangerAbi = [
        {
            "inputs": [],
            "name": "AccountNotRegistered",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "AlreadyRegistered",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DeviceClaimLimitExceeded",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "IneligibleToEvolve",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidInitialization",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                }
            ],
            "name": "InvalidNullifier",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidParamLength",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidReferralCode",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidRewardAmount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidSigner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidVerification",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "MaxLevelReached",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotInitializing",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OnlyNFTToken",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "OnlyOrbVerifiedAccounts",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "evolutionLevel",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "hammerPoints",
                    "type": "uint256"
                }
            ],
            "name": "Evolved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "version",
                    "type": "uint64"
                }
            ],
            "name": "Initialized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "updatedLevel",
                    "type": "uint8"
                }
            ],
            "name": "LevelUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "referrer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "OrbUpgrade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "referrer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "enum RewardManager.VerificationType",
                    "name": "verificationLevel",
                    "type": "uint8"
                }
            ],
            "name": "Registered",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "claimAmount",
                    "type": "uint256"
                }
            ],
            "name": "RewardClaimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "level",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rewardPerUser",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "numUsers",
                    "type": "uint256"
                }
            ],
            "name": "RewardsDistributed",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "ORB_REFERRAL_GROWTH_RATE",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TOTAL_LEVELS",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_shouldAllow",
                    "type": "bool"
                }
            ],
            "name": "allowDeviceLevelUsers",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "approver",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_taxAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "_level",
                    "type": "uint8"
                }
            ],
            "name": "calculatePerUserReward",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "claimReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractDeploymentTimestamp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_taxAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "distributeRewards",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "evolutionRewardPercentagePerLevel",
            "outputs": [
                {
                    "internalType": "uint32",
                    "name": "",
                    "type": "uint32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "hammerPoints",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "evolve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "fireNFT",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "getAccountEvolutionLevel",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_level",
                    "type": "uint8"
                }
            ],
            "name": "getMinHammerPointsToEvolve",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "level",
                    "type": "uint8"
                }
            ],
            "name": "getMinOrbReferralsCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_level",
                    "type": "uint8"
                }
            ],
            "name": "getMinReferralsRequiredPerLevelToEvolve",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_level",
                    "type": "uint8"
                }
            ],
            "name": "getNoOfRegisterAccountInLevel",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNoOfYearsPassed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "getReferrerAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "getRewardAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                }
            ],
            "name": "getUser",
            "outputs": [
                {
                    "internalType": "enum RewardManager.VerificationType",
                    "name": "verificationType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "evolutionLevel",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableRewards",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRewardPoints",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "nftContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referralCode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalRewardClaimed",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "orbReferralCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deviceReferralCount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stoneAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_fireAddr",
                    "type": "address"
                },
                {
                    "internalType": "contract IWorldID",
                    "name": "_worldId",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_appId",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_registerActionId",
                    "type": "string"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "isAccountRegistered",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isDeviceLevelUsersAllowed",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "_currentLevel",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_hammerPoints",
                    "type": "uint256"
                }
            ],
            "name": "isEligibleToEvolve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "name": "levels",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "numUsers",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardPerUser",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "minRequiredTotalReferrals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minRequiredOrbReferrals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minHammerPoints",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct RewardManager.EvolutionCriteria",
                    "name": "evolutionCriteria",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_hammerPoints",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "makeEvolutionCommitment",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_referralCode",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "signal",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                },
                {
                    "internalType": "enum RewardManager.VerificationType",
                    "name": "verificationLevel",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "makeRegistrationCommitment",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxClaimableAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "registerExternalNullifier",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "registerNullifierHashes",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "referralCode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "internalType": "enum RewardManager.VerificationType",
                    "name": "verificationLevel",
                    "type": "uint8"
                }
            ],
            "name": "registerUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_approver",
                    "type": "address"
                }
            ],
            "name": "setApproverAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "minRequiredTotalReferrals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minRequiredOrbReferrals",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "minHammerPoints",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct RewardManager.EvolutionCriteria[]",
                    "name": "_criteria",
                    "type": "tuple[]"
                }
            ],
            "name": "setEvolutionCriteria",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint32[]",
                    "name": "_evolutionRewardPercentagePerLevel",
                    "type": "uint32[]"
                }
            ],
            "name": "setEvolutionRewardPercentagePerLevel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_fireNFT",
                    "type": "address"
                }
            ],
            "name": "setFireNFTAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_maxClaimableAmount",
                    "type": "uint256"
                }
            ],
            "name": "setMaxClaimableAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_stoneNFT",
                    "type": "address"
                }
            ],
            "name": "setStoneNFTAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stoneNFT",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalUserWeight",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "updateLevel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signal",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "root",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "nullifierHash",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256[8]",
                    "name": "proof",
                    "type": "uint256[8]"
                }
            ],
            "name": "upgradeToOrb",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "internalType": "enum RewardManager.VerificationType",
                    "name": "verificationType",
                    "type": "uint8"
                },
                {
                    "internalType": "uint8",
                    "name": "evolutionLevel",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "claimableRewards",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRewardPoints",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "nftContractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "referralCode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalRewardClaimed",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "worldId",
            "outputs": [
                {
                    "internalType": "contract IWorldID",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://optimism-sepolia.infura.io/v3/bda8467718bb4cf09cb2755ef3489b6b"
    // );


    await window.ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log("🚀 ~ file: Register.tsx:18 ~ reUser ~ account:", account);

    // Create a provider using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);


    const signer = provider.getSigner();
    console.log("🚀 ~ main ~ signer:", signer)

    // try {

    //   await signer.getAddress()
    //   console.log("🚀 ~ main ~ 1312 signer.getAddress()")

    // } catch (error) {
    //   console.log("🚀 ~ main ~ 1315 error on signer.getAddress()")
    // }

    const wallet = new ethers.Wallet(
        "b657d994e357460cac8c707d312163d4495f08e309c0d4ed3640bf56b32a5392",
        provider
    );

    const contractAddress = "0x24Eeb1843a994546BFfC1e95b4948E275A72207E";


    const adminContract = new ethers.Contract(
        contractAddress,
        RewardMangerAbi,
        wallet
    );

    const contract = new ethers.Contract(
        contractAddress,
        RewardMangerAbi,
        signer
    );

    const address = "0xd96365F83b13B1b65967b47E9deC896288F92771";
    const id = "0x2df237fcf7debc722de78b745f2be90d10c6b4f33182e4440f1937e36fec1027"
    try {
        const commitment = await contract?.makeRegistrationCommitment(
            100, // uint256
            address, // address
            id, // uint256
            1, // uint8
            1730203397 // uint256
        );

        console.log("🚀 ~ getCommitment ~ commitment:", commitment);

        // const signer = getAdminProvider();
        console.log(
            "🚀 ~ getCommitment ~ toUtf8Bytes(commitment):",
            ethers.utils.arrayify(commitment)
        );

        const signature = await wallet.signMessage(ethers.utils.arrayify(commitment));

        const vrsObj = getVRS(signature);

        const { v, r, s } = vrsObj;
        const res = await contract?.registerUser(100, "0x2df237fcf7debc722de78b745f2be90d10c6b4f33182e4440f1937e36fec1027", 1730203397, v, r, s, 1);
        console.log("🚀 ~ main ~ res:", res)



    } catch (error) {
        console.log("🚀 ~ main ~ error:", error);
        const errorMessage = adminContract?.interface.parseError(error?.data);
        console.log("🚀 ~ main ~ errorMessage:", errorMessage)
    }
};

// main();

export const EthersContract = () => {

    useEffect(() => {
        main();
    }, []);


    return (
        <div>EthersContract</div>
    )
}
