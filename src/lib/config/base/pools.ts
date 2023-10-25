import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'LiquidityBootstrapping',
    'Investment',
    'StablePhantom',
    'ComposableStable',
  ],
  Stable: {
    AllowList: [
      '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c', // stabal3
      '0xe58ca65f418d4121d6c70d4c133e60cf6fda363c000000000000000000000013', // usdc/axlusd
      '0x8c2062ec8d477366c749982e3703371a7ae1e66500000000000000000000001f', // rETH/WETH
      '0xfb4c2e6e6e27b5b4a07a36360c89ede29bb3c9b6000000000000000000000026', // cbeth/weth
      '0xc771c1a5905420daec317b154eb13e4198ba97d0000000000000000000000023', // reth/weth
      '0x0c659734f1eef9c63b7ebdf78a164cdd745586db000000000000000000000046', // USDC/USDbC/axlUSDC
      '0x58f2110b61f97fd6b9200b038d92f17c722a5a3300000000000000000000004f', // axlBAL/BAL
      '0x30722f57d56037caa2c38abd1f5e2955814875e9000000000000000000000087', // axlETH/ETH
    ],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0xcde67b70e8144d7d2772de59845b3a67266c2ca7000200000000000000000009', // BAL/DAI
      '0x868f0efc81a6c1df16298dcc82f7926b9099946b00020000000000000000000b', // Bald/weth
      '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // Weth/stabal3
      '0x2423d6e341270bcd5add138bc3d4058857d5455f00020000000000000000000e', // WETH/DAI
      '0x0be4dc963db6ca066ff147069b9c437da683608b00020000000000000000000f', // OGRE/WETH
      '0xa892be6ee527f4fb8b3b60486a53c0627cb1d27e000200000000000000000014', // LINU/WETH
      '0x012e776cc3ed4c5adea3eda8677e82343e4de396000200000000000000000015', // 50WETH/50USDbC
      '0x52e281318fed4efffb8e46c0847a8f9b71a461a8000200000000000000000018', // 50BTC-50WETH
      '0x036d68e4e0005da4ef1c9ebd53b948d2c083495e00020000000000000000001a', // 50BTC-50USD
      '0xe40cbccba664c7b1a953827c062f5070b78de86800020000000000000000001b', // WETH-GOLD
      '0xfab10dd71e11d0ad403cc31418b45d816f2f988200020000000000000000001d', // well-eth
      '0xc69793563a8f0a2c5b25bcfb8661de50da8eae1000020000000000000000001c', // stg-usdc
      '0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020', // weth-gold 99
      '0x3f3e72417d016687f02eb369025f33b60db585cd000200000000000000000022', // 50WETH/50OGRE
      '0xa30ad556d10c829a67f41f60d41afdd4efa9286c000100000000000000000029', // base friend pool
      '0xe94dfd524414220b3f5d321a20b6f9dbc1d53a1f00020000000000000000002d', // sis-weth
      '0xc8dd61ff747c4bf93995a8086a8562f136059dc300020000000000000000002e', // one-cbeth
      '0xfa4ac3ecfece20769f8b5d9b6dfa5b7ed6569de2000200000000000000000033', // weth-mz
      '0x65e8e75899f683c8e2e73c77d6c5c63075f296cd00020000000000000000002b', // sus-weth
      '0x109fb663fbe47bcef8cf1d74759ebb869e390105000200000000000000000037', // 1WETH-99USDbC
      '0x7bd499100daee002c8df900d831a3dc0c2c91040000200000000000000000039', // 85BPT-stabal3-15ONE
      '0x18f150c43598cd822d39711c55bd90407a8b8ad700020000000000000000003b', // 90BPT-50STABAL3-50WETH-10ONE
      '0xce1edbf534b0d787cea315ecdc27bf857b73579300020000000000000000003c', // 50BPT-stabal3-50axlUSDC
      '0x775e01bde8c3f3de0f8ed1fd1331c32580417f5700020000000000000000003f', // 50DAI-50axlUSDC
      '0x35f823b87ea3c1918992f958b7764b4d37c7329400020000000000000000003e', // 50WETH-50USDbC
      '0x07d72005b9e2b0e4d9f2ee903de59a43439e15e6000200000000000000000044', // 50WETH-50cbXEN
      '0xb1b1155337d19eb0ef9c75aa88aeb4e531440508000200000000000000000042', // 50WETH-50Gekko
      '0x45754a260273183dd91f795b7feaa43c37eb148d000100000000000000000045', // 33WETH-33DAI-33BAL
      '0xb328b50f1f7d97ee8ea391ab5096dd7657555f49000100000000000000000048', // GOLD/BAL/USDC
      '0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047', // 50GOLD/25WETH/25USDC
      '0x4387119e8341ff2ba632b9f81649d865cf759276000200000000000000000049', // 50USDbC-50axlUSDC
      '0xb282f87938525296d4e6471af9fa15a669851c3200020000000000000000004a', // 50USDbC-50axlUSDC
      '0x6f1b5e5bd3e5cc88e835c7122b90588e3cf894cd00020000000000000000004c', // 50WETH-50USDbC
      '0xa0aa5caffc32a2fe3bdbebaf37e2c75d0dc6d1ab00020000000000000000004b', // 50BAL-50DAI
      '0x18423174a94aa1856ed43b76214fa5a94534ceb000020000000000000000004e', // 50WETH-50USDbC
      '0x096fa90589c05a12b7c4356f9c908c650894e1e0000200000000000000000051', // 50WETH-50USDC
      '0xbbb493817418c769e3799ea9ad2228a38c0950b7000200000000000000000054', // 50WETH-50WELL
      '0xc80289149774aeab633a7a2c28d673c784a30ba1000200000000000000000055', // 50BAL-50USDbC
      '0x2ef2f21f3ccdc6de4147637275905df9b50dd094000200000000000000000057', // 50WETH-50DAI
      '0x668c6196e539391e0020a3dee3ac99b74984bcce000200000000000000000059', // 50BAL-50WETH
      '0x9544eb53f98098c6a885a7a4cd014d7a4a03aa6300020000000000000000005c', // 80GOLD-20WETH
      '0x6ffcdc1eba9e6fb98cb09ac27fd65bc01a9d34ef00020000000000000000005d', // 50WETH-50USDbC
      '0x4aed3e44a664228f016b62a186bc6893bd7e323e000200000000000000000060', // 50BAL-50BPT-stabal3
      '0x2f5506155e08ca0766d963d5cb51137b8f8efb5100010000000000000000005f', // 33BALD-33WETH-33GOLD
      '0x6b0db5b8477b3c36de5ddd790482e264eb174d4a000200000000000000000061', // 50LINU-50OGRE
      '0x143ab71e47361d0a65499ca2e12b1edd10f2e540000200000000000000000062', // 50WETH-50USDC
      '0x9599c892adee7230b259bb4c9cff7920da7c9279000200000000000000000064', // 50BAL-50WETH
      '0x78380eff80f1381b29702c0f87da10bd7d7cec97000200000000000000000066', // 50WETH-50USDbC
      '0xd6d41238e56ee3427c6d76e38ebf9f331408dd5b000200000000000000000067', // 50BAL-50USDC
      '0xb301f96097f1ab4f189f04a4662c751c822ef38f00020000000000000000006d', // 50DAI-50USDbC
      '0x26987d07edb3bbff6c20642aa63c2fddf29aecab00020000000000000000006c', // 50WETH-50USDC
      '0x4131cf825cc960a6ccca186a2fda16ae2d3b2e0b00020000000000000000006a', // 50WETH-50axlUSDC
      '0x22dfd49958ff8a2b60d3006360a41963d403024a000200000000000000000069', // 60WETH-40USDbC
      '0x8b7baa97593af52a6c81fbb1539ea920804380d8000200000000000000000068', // 1WETH-99USDbC
      '0xe431ed76d1ad5b262230037ea16463c6398591ad00020000000000000000006e', // 50USDC-50USDbC
      '0xdad0cf7940078ec8537df85e9499fb235d32c3d100020000000000000000006f', // 50WETH-50USDC
      '0x4c271a843daa3a681bcbfb3cb44942a7b98f3edb000200000000000000000070', // 50USDbC-50axlUSDC
      '0xcc4ccab360dc7267117f20ecd929a7437eadc004000200000000000000000071', // 50WETH-50USDbC
      '0x0631a3b78f3d87eca5e20bf15f6a2fba1ed38916000200000000000000000072', // 50USDbC-50axlUSDC
      '0xd9c664b89e335f801e887a66f02a63ac1afce1be000200000000000000000081', // 50USDbC-50axlUSDC
      '0xf912fe5769800bb19c66706cb7f61c97c7122f22000200000000000000000082', // 50WETH-50axlUSDC
      '0xaf4e8c5c8c4e185e1160e291fe17c61b51f7dc52000200000000000000000078', // 50USDbC-50axlUSDC
      '0xf0b2d22311214b40668c386fd736bad338b1a9db00020000000000000000007f', // 50USDC-50USDbC
      '0x8f68c9afe436d0ac503084f20b771ffc64930345000200000000000000000077', // 50WETH-50USDbC
      '0xadfa872b5107022979fe972e25c6dfcf3f074b4e000200000000000000000079', // 50WETH-50USDbC
      '0x7fc88c8a4900b534bcaa2de461578d5403d4f3de00020000000000000000007d', // 50WETH-50USDbC
      '0x348836989bce46086433437cec59d89f9e59eea9000200000000000000000076', // 50WETH-50axlUSDC
      '0xdd6253dc8052fdecd9f425fd6173a244fd343e5d000200000000000000000083', // 50cbETH-50axlUSDC
      '0x69e82e733711039af7f6f922b97fd0c3213708ea000200000000000000000085', // 50WETH-50USDbC
      '0xad9a6c03750f30204fcbdbd5bebdbb80a66129ff000200000000000000000084', // 50USDbC-50axlUSDC
      '0x0eff7b6a3003022062bcf3373523fe2754a42d0d000200000000000000000088', // 50USDbC-50axlUSDC
      '0x01b7bb004d3f0e78d176f52ecf3e916837e21bc500020000000000000000008c', // 50WETH-50USDbC
    ],
  },
  Factories: {
    '0x4c32a8a8fda4e24139b51b456b42290f51d6a1c4': 'weightedPool', // Weighted V5
    '0x8df317a729fcaa260306d7de28888932cb579b88': 'composableStablePool', // ComposableStable V5
  },
  Stakable: {
    VotingGaugePools: [
      '0xfb4c2e6e6e27b5b4a07a36360c89ede29bb3c9b6000000000000000000000026', // cbeth/weth
      '0xb328b50f1f7d97ee8ea391ab5096dd7657555f49000100000000000000000048', // gold/bal/usdc
      '0xc771c1a5905420daec317b154eb13e4198ba97d0000000000000000000000023', // reth/weth
      '0x0c659734f1eef9c63b7ebdf78a164cdd745586db000000000000000000000046', // USDC/USDbC/axlUSDC
      '0x433f09ca08623e48bac7128b7105de678e37d988000100000000000000000047', // gold/weth/usdc
    ],
    AllowList: [
      '0x868f0efc81a6c1df16298dcc82f7926b9099946b00020000000000000000000b', // Bald/weth
      '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // WETH/stabal3
      '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c', // stabal3
      '0xe58ca65f418d4121d6c70d4c133e60cf6fda363c000000000000000000000013', // usdc/axlusd
      '0x52e281318fed4efffb8e46c0847a8f9b71a461a8000200000000000000000018', // 50BTC-50WETH
      '0x036d68e4e0005da4ef1c9ebd53b948d2c083495e00020000000000000000001a', // 50BTC-50USD
      '0xe40cbccba664c7b1a953827c062f5070b78de86800020000000000000000001b', // WETH-GOLD
      '0xc69793563a8f0a2c5b25bcfb8661de50da8eae1000020000000000000000001c', // stg-usdc
      '0x17e7d59bb209a3215ccc25fffef7161498b7c10d000200000000000000000020', // weth-gold 99
      '0xa30ad556d10c829a67f41f60d41afdd4efa9286c000100000000000000000029', // base friend pool
      '0xe94dfd524414220b3f5d321a20b6f9dbc1d53a1f00020000000000000000002d', // sis-weth
      '0xfa4ac3ecfece20769f8b5d9b6dfa5b7ed6569de2000200000000000000000033', // weth-mz
      '0x65e8e75899f683c8e2e73c77d6c5c63075f296cd00020000000000000000002b', // sus-weth
      '0xfab10dd71e11d0ad403cc31418b45d816f2f988200020000000000000000001d', // well/weth
    ],
  },
  Metadata: {
    '0x6fbfcf88db1aada31f34215b2a1df7fafb4883e900000000000000000000000c': {
      name: 'Balancer Stable USD',
      hasIcon: false,
    },
    '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d': {
      name: 'WETH/Balancer Stable USD',
      hasIcon: false,
    },
  },
  Deep: [
    '0x2db50a0e0310723ef0c2a165cb9a9f80d772ba2f00020000000000000000000d', // Weth/stabal
  ],
  Deprecated: {},
  GaugeMigration: {},
  BoostedApr: [],
  DisabledJoins: [],
  Issues: {},
};

export default pools;
