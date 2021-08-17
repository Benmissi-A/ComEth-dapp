export const ComEthAddress = [
  {
    inputs: [
      {
        internalType: "address",
        name: "comEthOwner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ban",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getIsBanned",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposals",
    outputs: [
      {
        components: [
          {
            internalType: "enum ComEth.Vote",
            name: "vote",
            type: "uint8",
          },
          {
            internalType: "enum ComEth.StatusVote",
            name: "statusVote",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "proposition",
            type: "string",
          },
        ],
        internalType: "struct ComEth.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proceedPaiement",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "proposalById",
    outputs: [
      {
        components: [
          {
            internalType: "enum ComEth.Vote",
            name: "vote",
            type: "uint8",
          },
          {
            internalType: "enum ComEth.StatusVote",
            name: "statusVote",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "proposition",
            type: "string",
          },
        ],
        internalType: "struct ComEth.Proposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "selectVote",
    outputs: [
      {
        internalType: "enum ComEth.Vote",
        name: "vote",
        type: "uint8",
      },
      {
        internalType: "enum ComEth.StatusVote",
        name: "statusVote",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "string",
        name: "proposition",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ComEth.Vote",
        name: "vote_",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "proposition",
        type: "string",
      },
    ],
    name: "submitProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];