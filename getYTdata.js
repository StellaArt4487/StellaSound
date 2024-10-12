// 手動影片清單
let videoLinks = [   
'cKXKzP6nmOg','4j_QXkXB8Yg','-QrXX0yM78A','_txUAf8CqjQ','GWh2II0cL2o','NE-vlGBflJo','FSk6LBTJU7E','TTeJ1oK_55Q','G_6p5rjU3P8','kwMCNKIGq70',
'b-51efhoU5Q','kk7zYQst24Q','ABwa_EfA050','vamK5BNEdt8','XpBoI6yUZME','cUP-QDpKLd8','l7MMQ9vRXRk','kLvh64JWtgo','jBHSf_LJfGM','278yO0GJMzI',
'bl8GVLfs9hg','VzboTdoOhvw','0GnRWUOE03E','qmvPXia9oxo','QcSBoskjJUY','MlhCOGQ4IHg','2sVSJbQms7Q','5qa85wL7hSQ','uKifbIyVHvs','vJUv20sruXg',
't2GXzegtLC0','K3gBSRC66r4','9fh0CliLu-8','m8n0bcHbZf8','8lajASWi2pE','NLEkOOrX3tE','EdDVwy91Jb8','hq8LH2jMAWk','547ZlmwMzL8','vfADEoVhrNg',
'QuG01bqIoKw','YjJESX0VNmQ','jWXOlCQ6qqg','dAvkQhbksSs','P6C6L33YCqM','5gthkgKjN-w','oeV3Q6mRrao','ABFZqZyojSc','yFSUnclAldM','gDfYHrmNXKU',
'YaEc7_mdBnY','lS2f5gryRWg','Pc0mudantNE','DjqbaIBX93s','0J7JXN0UMeM','miQ0-qxZIxI','adc72mwSUoM','I4E3Mg1lBSA','tGm7jtpJcKw','VM0Kyx83Z3w',
'V3uoqPQjmbk','QJHv4zvkV9w','PEiYZJ_fNeY','7l6-ZntA1Us','b5UXyZNrqJ0','hdWn1LY5Xn0','nJp1gXBA_VM','pEqXd6RNmeM','g7Wmk9Xm794','Rx5g1Yc5d4A',
'03sPaqbt_Og','BEOc1jAZAh8','B8dHKbCeSeA','YrVxQrRl4Bk','YrC0lgU3XYg','EEpfQTGGpiw','DJyPI9oCsso','SJCAWqhjiz4','HuV86faLwhw','aTumPS2Aukc',
'rbOm1lMrm_Y','f_WozGCKWHc','Su6QiGUuS2I','SU7jgKaKl7s','JAKmf9-vNH8','YruSw4MI7Jk','x0lO9KioXqI','GcUJNqvh5UQ','iIjCQZD0Qj8','jVcQjnedMt8',
'GWKDErTcw94','TYl7uZylVXc','XHEkuaiXIpY','RwlcU_PSAMM','ZVAtp85l9vs','cn5i7aRv71U','RO-mbU6hh0U','z2FU7VOsNVQ','5HISb0BfAbk','rd9YqmA8b7g',
'684JlRfZ4j4','Iitm7Uyovyc','gpzM_b2ow9I','x1vakP1PGQw','4X26Hfaupj8','xSHUl-yVoLk','fvlGgVPgqqU','FJSIaa7koYQ','6ZdqyKiP040','5cjYB8xQG0k',
'DfOY7hseOa8','4jVjeEXkekE','JcdCaChCooo','HxDW5edPYWc','Fg5bYnkoP5o','_6fkIeTXgys','gmkISswkHWM','VMQcZbfI0_k','5dfzKJmUijc','44nCSIsRSLY',
'Y_MsaGrVDhA','BbQSMk5H5mM','fkLFFOg1wuk','MwYDlKhRcvc','-kPwHALShDg','qo2omq28-nc','arKBsWlFQr8','omMZewY4p-U','StoAGUyNddw','m61Y8hZN9dU',
'gIU0sH2NJ_w','u_Zluomk-4M','JiyPE-hUaNs','fm8HTeqt4K0','k-tZmWV33n4','zmrxPTbQvkc','3HNAErDHcsw','V-IjqyOCoY0','83X6F5VyPIg','ByTOTyYWZf4',
'9Tr1bu1bde0','_UnLpe8qK0c','YaqPiNN0Y6w','XT9wfidyoUM','G43gcoJ5TXQ','rOy3CAOqAfE','VRuC48XYd3k','NOMbxQyZtPE','j2hOU2IZn7M','jJvwrZk_nGs',
'BoRUGg9a0CY','U8fF11rzfLY','KigaqhG_M08','qMEPMcYdOrQ','JvR3QT8nBnA','GM-2CbhjlfY','IKuIwfubq2U','qGcEB8bmxXo','EjS-6j6-Yu4','dpnUNJ_9ye8',
'v_NvAmOSNfw','rvySwdvH3fE','OHvN5smhK2M','fxrHxpn6_f0','IT8mKgex-sw','lgKiyaAOm1Y','qTFrY3zN0g8','XTmz5sydSE8','J2OOdHthxgI','q9uNKjm6UdY',
'gIuSvYSWBkQ','TMDS9jYTirg','mSuHBHxlyDU','fHsNEwJhZpQ','Ikoinb-EHPM','fJZvMMOZTwA','LinsWOno5ZA','9-v7NdRAKW0','1Y2FFQSzDzY','L4ebcNngB_U',
'ydRG-c93Ni0','ah9-I6emFUI','rUNWpEHJSZs','hYKOGG9UASE','iFkFuUbdsYQ','ypAabEdUGYM','DqyQIWXVYE4','AjWD8PAQv_A','u-eneGpL4TM','u1xEJRfk4vw',
'G9P8GvxNOQI','3aKOE4A-mQQ','V6YBjYzG86M','hJmG1APKPhk','THUp6J1W2NQ','-guVyUclwZg','GiWazSPBxW4','_YgQH5WSD8o','cOtXdxdGxW0','WZCJgSLIVH0',
'QdPzE_Jvkb0','fpgcwOvciu4','8rKk6WGjnog','a_udmzfIkJ0','znP-RFhSlAw','JLG7PlF6-MY','EB_-7XiG-k4','Jq7RfI6_v94','YME0_WgbM_4','nHnO8JuTnfI',
'wYfSYgWrgAY','gvv11l5JBIg','MY1rxiim-zk','S87oKsJFTqQ','E8Z31bNnLyU','o-MR1FDdsQE','JX1SBRSvGYc','8lCdMP6UaRA','VxkYvbJn7tw','y0NLDRE5osE',
'1cPpmZUP3mU','Yd1ZtnyNaIQ','PW8geK25WEA','wVc9nV8sEf8','7XTz9MT6ELs','2NkbUrONfVs','hNuRMUxSBJE','a1wCmEHLQ0c','GeC46MsdAB8','6w5ufBjmvp0',
'y4P0bMqrXsE','AsMqz_B7gVw','1I7QArL2Fgo','T0aMZG88UjA','xWISFazVP6U','AhNb31l82GE','AcxQFDjktRM','yLGC_k-9MjE','aypi5nqsP58','kMr6WXIK5BM',
'WTMoRug2tws','YuYgrUTT1C4','HxHkTSFrrkM','ixHQP5Bn2sQ','GPhdxQeULYw','I7m743VdZKE','vWSi-1xVCBc','9mDYf1zyMO8','flJaog_78g4','wB9NvhEfRNc',
'eLsK7BmibLk','cSuG8xEikE4','5DgHf4vWHE4','Yrlt8QHHT2M','EAo6zlW0m88','e0nXAFjGBC0','LVd-oQdSyBI','QzQOd-0-NFY','_VpBxa_c8gM','VJ052Q0SJjI',
'lIDrqIH4X0g','bDI10SPWvfE','59uvZFRkIXk','6PaaDpeh5-w','PKb5yu-B7eA','ZypFYkrIAq8','KmIdgCS0dGU','5FV-ej37uKs','Pjp9leYeRDs','hJL-jVN4XfM',
'X3PVgW6Caq4','_hYhKVOEPH8','-hXMimXP9Kk','nmKCEGaqSDY','GmoECAadNIY','27cypn_mm_s','kTXrMBsc4JE','jre9tKRsU-A','Dauc_twOoQA','JAb5LD8v2PU',
'-tl3KhKEvbg','8namd0J6pwE','_8yegpIuumA','a6j_4gQX9Nk','duRLsjZKLFI','MNL3qfPEvuU','vIGrtY7qB6Y','EXjtsygj8sw','IZiT0oLT2W8','L0TgwnlKSJU',
'VD_0XOlvu1w','7RsWjuKn4CI','9HRUojnY2qU','jGR13StTUCE','Cm4EZMt_bII','xJBJVdpnncY','gbZ0byvxvdA','WKEnhIoWKzo','9xln1YONP7g','Foveop1BdH4',
'o4N3tc2d2vY','YBLGmwRB5qI','kfx2nTNCCfw','r5DWiCIGgP0','pTBxBTuEa_0','UZWuGZWk1iQ','zhJw3dtuHWs','ZfWP1lg5eWY','oLNDSksnOdw','-df-gjpZTrM',
'm8-y2XuTl6c','-vaDFHP5ZSk','pFRIxQLSGM0','tS277D0SyWM','cg7zG7FNKYo','jpnv5lRMgbo','4EIUpDN5rC8','Hua8Qm-Ab0c','fHpCHHcIrMw','dahgXBL9RAk',
'NCVDvvq0zRc','qrmHdpzNp7A','nmDJk0s62aY','n996D5ZUBes','xQD_5mduKxs','jlBolYcy540','eb8HQpfLbvE','YVW_gJ94Xc0','aIjRWO9uhno','c0zmWt6IDzo',
'h5OLqJu-BvM','xUUBYeQL1iI','NNhJlqBj6U8','6rSvmxhPdY4','_I7pDsfBfWA','jAhMHHj7urQ','NXUcLPDAGQg','KmMU_PQry9s','75GflgPHv90','Y2qwD4lI-9o',
'MomAsX4PLg4','ChbR3OEx0c4','W3AfmuZGn7c','Ugip3t5y7_k','o3Wa2iP1LJY','3ZtKZiHzerc','ejpTkaO2Bgw','KoDJVaKbsDY','ZnR2Mm7Kjkk','criPXiNn2I4',
'nODetbUrBfw','3tHQP2d3xS8','-rtaPkI4qKU','mrLmxfp_JV4','CEICcJznE70','cHlkGlyfQtk','tdS6iChIDOw','hs4BOO67Zz4','S4Y2xlF9Iz4','2B15aK1GdWQ',
'xchSj1HIDg8','i6fE365AF98','YQgzl7qzIW4','82672-izdQU','xILNYoKSNC4','dTEqN59jruI','en_dgTVK8Cs','lJ4OPcWDl1c','apYz0rJzobg','6Ho4J2JWd5M',
'sbfdXGXEUwo','Nq2svkyqHFY','R1cFQi6T0-A','jnBeVr3uKP4','bISHGTkwhZo','cJXavtE2BUA','LhTz3rLox_0','NjCU7LZ1-ag','V5tL6EKMRs8','BlsG_NwBqP0',
'F2eYEB4fyIM','srOlOaKS61E','q2FRTpmQ3yo','B8ZcVDNrzYU','9U9VCJTfHY0','PES2p9o_LWA','Ka007gKtsfQ','J49ZKggOefs','VGtffJJGGeU','dAIV6HEDC4M',
'jRladwSpwAk','P6BnwstGwT4','Y3R_ReznQJg','Raqoa5nZPQw','NBCl97PiIcI','9MjMbujbSao','wjxyqAXNsUU','4TTf3Z-s68Q','AZpTREYf6tM','dIXppB14Fng',
'Qd6kddbif70','Ck25TXXKfMQ','hETDHbQ56CY','wJ8vCJbQJcs','prHxyFNmq3w','8CpYd8Y1_F8','kbNzygSB-Qo','vpdhcoDFOgs','vwv5089w8fY','FscL_XlTyFk',
'MYifCQoM3vY','B1TLBowMSng','9bGDQddT074','ojz7nHy0Fzo','QDw3YevXmik','NJ4_zDrueGA','Mc3eTrDNRLQ','9pmQN1mVSg8','b0l6-JCYwxs','sOtiSwIEQaA',
'ezXTmSklAVQ','z49M6w_AzKc','UBgKKKRXSnU','imxMkm8GPtw','hz3DLhqEArs','zqOnwxQup-w','ypdUdRA-4vE','FGVEbjcJUbY','8OtIAjaxPto','mSUoKbvs8kA',
'0_WpYXN43PA','nDpCTPLPVSg','xsMq6EdcLuE','gIZVTKJxT6U','XTlsg0LsDs0','GayLiXY0jgw','ur4cEArrrME','OyIYm5vcpDc','jG_B-qjLF3Y','5dybR3N_5DI',
'J5ZJp8eRMH8','yZ6hDzcyccs','8mS6ZuWMU4U','foHPfQD_crA','srGg3pkteqo','lt5D7FGH3b0','7Rv2mLo_jaY','M4scv_aT9WA','_uErRApcaUU','3wQswynCVSA',
'fp9GZQ8mdbI','gP_mkFhHqjM','RFyJ9KpIBLw','BPw5Zy7CLtg','7YTK2oJLpo0','Wxoe1_LJnok','ruPaxEhDsCY','IKLqndCcWfU','wnhDD728b8Q','ZPrXxDSBlI4',
'w-6gWiF6ZiM','WeIjNdhE62s','hpnzafMBlUY','HhiIiLTUi1E','ax0x3aIdiv0','d9jKjZkZNKk','YUUGsKlcagI','nJ45w_1Rowc','nFDg79DR1X8','r0txQapV8t0',
'sBPOh40mz58','YH-JSMtRCBA','8lhoOiuQUF4','5F_NSUZ9V4Q','xOV-EmK06t8','2VcM4O8u5rY','fYv2hzeshFA','jJJ7cuz-Er4','rFJSh3W0Wjk','WeL8ZOHRuWc',
'o_qDHTdjgxA','2DKGVgbwq00','EnbL4k169QI','exFnbVSnADM','RX5P6cuvW1c','VISUWrbEKaY','wK1b_08FocE','kfl74YflXG0','YWRgWp-KLvU','rStLQNFuq74',
'blosnOuOLH4','6HwpHCrdvaw','NvZIOPugcPY','dW_mqq81WUg','K5kYHHeTMOw','nx4NaVod5VU','2-2nRIoB_B0'
  ];

// 隨機選擇一個影片
let randomIndex = Math.floor(Math.random() * videoLinks.length);
let randomVideoUrl = videoLinks[randomIndex];
// 網頁載入時撈取 YouTuber 影片
document.addEventListener('DOMContentLoaded', () => {
  /*
    videoContainer.innerHTML = `
<div class="video-wrapper">
    <h3>本次推薦影片：<br>
        <iframe width= auto height="150" src="https://www.youtube.com/embed/${randomVideoUrl}" frameborder="0" allowfullscreen></iframe>
    </h3>
</div>
    `;
*/
videoContainer.innerHTML = `
  <div class="video-wrapper">
  <h3>推薦影片：<br>
  <a href="https://www.youtube.com/watch?v=${randomVideoUrl}" target="_blank">
    <img src="https://img.youtube.com/vi/${randomVideoUrl}/hqdefault.jpg" alt="YouTube Live Thumbnail" style="width: 100%;hight: auto; max-width: 200px;">
  </a>
</div>
`;
});