// Essa função inicializa as funções dentro dela ao iniciar a aplicação =======================
function init() {
  window.onload = vanish;
  // Chamada de Apis e População no HTML
  populateUser();
  populateMenu();
  populateProductMoreSold();
  populateResellers();
  populateSales();

  // Items e animações dentro do site
  Graphs();
  reportBtns();
  HamburguerAnimation();
}

init();

// Preloader ==============================
let loader = document.querySelector("#preloader");
function vanish() {
  loader.classList.add("disppear");
}

// Fecth Apis e População no HTML =============================
async function getData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function populateMenu() {
  let asideIcons = [
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3.75018H3.75V10.5002H10.5V3.75018Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 3.75018H13.5V10.5002H20.25V3.75018Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13.5002H13.5V20.2502H20.25V13.5002Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 13.5002H3.75V20.2502H10.5V13.5002Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.087 2.02889C11.1249 0.928254 12.8751 0.928254 13.913 2.02889V2.02889C14.5279 2.68098 15.4326 2.97493 16.3133 2.8088V2.8088C17.7999 2.52839 19.2159 3.55715 19.4086 5.0576V5.0576C19.5228 5.94657 20.0819 6.71616 20.8921 7.09944V7.09944C22.2596 7.74635 22.8004 9.41095 22.0744 10.7381V10.7381C21.6442 11.5244 21.6442 12.4756 22.0744 13.2619V13.2619C22.8004 14.5891 22.2596 16.2537 20.8921 16.9006V16.9006C20.0819 17.2839 19.5228 18.0534 19.4086 18.9424V18.9424C19.2159 20.4429 17.7999 21.4716 16.3133 21.1912V21.1912C15.4326 21.0251 14.5279 21.319 13.913 21.9711V21.9711C12.8751 23.0718 11.1249 23.0718 10.087 21.9711V21.9711C9.47213 21.319 8.56741 21.0251 7.68666 21.1912V21.1912C6.2001 21.4716 4.7841 20.4429 4.59141 18.9424V18.9424C4.47724 18.0534 3.91809 17.2839 3.1079 16.9006V16.9006C1.74043 16.2537 1.19956 14.5891 1.92562 13.2619V13.2619C2.35579 12.4756 2.35579 11.5244 1.92562 10.7381V10.7381C1.19956 9.41095 1.74043 7.74635 3.1079 7.09944V7.09944C3.91809 6.71616 4.47724 5.94657 4.59141 5.0576V5.0576C4.7841 3.55715 6.2001 2.52839 7.68666 2.8088V2.8088C8.56741 2.97493 9.47213 2.68098 10.087 2.02889V2.02889Z" fill="#CDD2EB"/><path d="M8.46967 14.4697C8.17678 14.7626 8.17678 15.2375 8.46967 15.5304C8.76256 15.8233 9.23744 15.8233 9.53033 15.5304L8.46967 14.4697ZM15.5303 9.53039C15.8232 9.2375 15.8232 8.76262 15.5303 8.46973C15.2374 8.17684 14.7626 8.17684 14.4697 8.46973L15.5303 9.53039ZM9.53033 15.5304L15.5303 9.53039L14.4697 8.46973L8.46967 14.4697L9.53033 15.5304Z" fill="#425DC7"/><path d="M11.25 8.40018C11.25 9.31145 10.5113 10.0502 9.60001 10.0502C8.68874 10.0502 7.95001 9.31145 7.95001 8.40018C7.95001 7.48891 8.68874 6.75018 9.60001 6.75018C10.5113 6.75018 11.25 7.48891 11.25 8.40018Z" stroke="#425DC7" stroke-width="1.5"/><path d="M16.05 15.6C16.05 16.5113 15.3113 17.25 14.4 17.25C13.4887 17.25 12.75 16.5113 12.75 15.6C12.75 14.6887 13.4887 13.95 14.4 13.95C15.3113 13.95 16.05 14.6887 16.05 15.6Z" stroke="#425DC7" stroke-width="1.5"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.625 3L3.75 6.59995V19.1998C3.75 19.6771 3.95193 20.135 4.31138 20.4725C4.67082 20.8101 5.15833 20.9997 5.66667 20.9997H19.0833C19.5917 20.9997 20.0792 20.8101 20.4386 20.4725C20.7981 20.135 21 19.6771 21 19.1998V6.59995L18.125 3H6.625Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 6.60016H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.2086 10.1998C16.2086 11.1553 15.8047 12.0716 15.0858 12.7473C14.3669 13.4229 13.3919 13.8025 12.3753 13.8025C11.3586 13.8025 10.3836 13.4229 9.66469 12.7473C8.9458 12.0716 8.54193 11.1553 8.54193 10.1998" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.9996C17.5228 21.9996 22 17.5225 22 11.9997C22 6.47694 17.5228 1.99985 12 1.99985C6.47715 1.99985 2 6.47694 2 11.9997C2 17.5225 6.47715 21.9996 12 21.9996Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7.99973H11.1667C9.97 7.99973 9 8.89515 9 9.9997C9 11.1043 9.97 11.9997 11.1667 11.9997H12.8333C14.03 11.9997 15 12.895 15 13.9996C15 15.1042 14.03 15.9996 12.8333 15.9996H9" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.99985V7.99985" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15.9996L12 17.9996" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_533_4034)"><path d="M19.4 14.9996C19.2669 15.3013 19.2272 15.6358 19.286 15.9602C19.3448 16.2846 19.4995 16.5839 19.73 16.8196L19.79 16.8796C19.976 17.0654 20.1235 17.2859 20.2241 17.5287C20.3248 17.7715 20.3766 18.0318 20.3766 18.2946C20.3766 18.5574 20.3248 18.8177 20.2241 19.0605C20.1235 19.3033 19.976 19.5238 19.79 19.7096C19.6043 19.8955 19.3837 20.043 19.1409 20.1437C18.8981 20.2443 18.6378 20.2961 18.375 20.2961C18.1122 20.2961 17.8519 20.2443 17.6091 20.1437C17.3663 20.043 17.1457 19.8955 16.96 19.7096L16.9 19.6496C16.6643 19.419 16.365 19.2644 16.0406 19.2056C15.7162 19.1468 15.3816 19.1865 15.08 19.3196C14.7842 19.4463 14.532 19.6568 14.3543 19.9251C14.1766 20.1934 14.0813 20.5078 14.08 20.8296V20.9996C14.08 21.53 13.8693 22.0387 13.4942 22.4138C13.1191 22.7888 12.6104 22.9995 12.08 22.9995C11.5496 22.9995 11.0409 22.7888 10.6658 22.4138C10.2907 22.0387 10.08 21.53 10.08 20.9996V20.9096C10.0723 20.5786 9.96512 20.2576 9.77251 19.9883C9.5799 19.719 9.31074 19.5139 9 19.3996C8.69838 19.2665 8.36381 19.2268 8.03941 19.2856C7.71502 19.3444 7.41568 19.499 7.18 19.7296L7.12 19.7896C6.93425 19.9755 6.71368 20.123 6.47088 20.2237C6.22808 20.3243 5.96783 20.3761 5.705 20.3761C5.44217 20.3761 5.18192 20.3243 4.93912 20.2237C4.69632 20.123 4.47575 19.9755 4.29 19.7896C4.10405 19.6038 3.95653 19.3833 3.85588 19.1405C3.75523 18.8977 3.70343 18.6374 3.70343 18.3746C3.70343 18.1118 3.75523 17.8515 3.85588 17.6087C3.95653 17.3659 4.10405 17.1454 4.29 16.9596L4.35 16.8996C4.58054 16.6639 4.73519 16.3646 4.794 16.0402C4.85282 15.7158 4.81312 15.3813 4.68 15.0796C4.55324 14.7839 4.34276 14.5316 4.07447 14.354C3.80618 14.1763 3.49179 14.0809 3.17 14.0797H3C2.46957 14.0797 1.96086 13.8689 1.58579 13.4939C1.21071 13.1188 1 12.6101 1 12.0797C1 11.5493 1.21071 11.0406 1.58579 10.6655C1.96086 10.2904 2.46957 10.0797 3 10.0797H3.09C3.42099 10.072 3.742 9.96484 4.0113 9.77223C4.28059 9.57963 4.48572 9.31046 4.6 8.99973C4.73312 8.69812 4.77282 8.36355 4.714 8.03916C4.65519 7.71477 4.50054 7.41543 4.27 7.17976L4.21 7.11976C4.02405 6.93402 3.87653 6.71344 3.77588 6.47065C3.67523 6.22786 3.62343 5.96761 3.62343 5.70478C3.62343 5.44195 3.67523 5.1817 3.77588 4.93891C3.87653 4.69612 4.02405 4.47554 4.21 4.2898C4.39575 4.10385 4.61632 3.95633 4.85912 3.85569C5.10192 3.75504 5.36217 3.70324 5.625 3.70324C5.88783 3.70324 6.14808 3.75504 6.39088 3.85569C6.63368 3.95633 6.85425 4.10385 7.04 4.2898L7.1 4.3498C7.33568 4.58033 7.63502 4.73498 7.95941 4.7938C8.28381 4.85262 8.61838 4.81291 8.92 4.67979H9C9.29577 4.55303 9.54802 4.34255 9.72569 4.07427C9.90337 3.80598 9.99872 3.4916 10 3.16982V2.99982C10 2.46939 10.2107 1.96069 10.5858 1.58563C10.9609 1.21056 11.4696 0.999847 12 0.999847C12.5304 0.999847 13.0391 1.21056 13.4142 1.58563C13.7893 1.96069 14 2.46939 14 2.99982V3.08982C14.0013 3.4116 14.0966 3.72598 14.2743 3.99427C14.452 4.26256 14.7042 4.47303 15 4.5998C15.3016 4.73291 15.6362 4.77262 15.9606 4.7138C16.285 4.65498 16.5843 4.50033 16.82 4.2698L16.88 4.2098C17.0657 4.02385 17.2863 3.87634 17.5291 3.77569C17.7719 3.67504 18.0322 3.62324 18.295 3.62324C18.5578 3.62324 18.8181 3.67504 19.0609 3.77569C19.3037 3.87634 19.5243 4.02385 19.71 4.2098C19.896 4.39554 20.0435 4.61612 20.1441 4.85891C20.2448 5.1017 20.2966 5.36195 20.2966 5.62478C20.2966 5.88761 20.2448 6.14786 20.1441 6.39065C20.0435 6.63344 19.896 6.85402 19.71 7.03976L19.65 7.09976C19.4195 7.33544 19.2648 7.63477 19.206 7.95916C19.1472 8.28355 19.1869 8.61812 19.32 8.91973V8.99973C19.4468 9.2955 19.6572 9.54774 19.9255 9.72542C20.1938 9.90309 20.5082 9.99844 20.83 9.99972H21C21.5304 9.99972 22.0391 10.2104 22.4142 10.5855C22.7893 10.9606 23 11.4693 23 11.9997C23 12.5301 22.7893 13.0388 22.4142 13.4139C22.0391 13.7889 21.5304 13.9997 21 13.9997H20.91C20.5882 14.0009 20.2738 14.0963 20.0055 14.274C19.7372 14.4516 19.5268 14.7039 19.4 14.9996Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14.9997C13.6569 14.9997 15 13.6566 15 11.9997C15 10.3429 13.6569 8.99973 12 8.99973C10.3431 8.99973 9 10.3429 9 11.9997C9 13.6566 10.3431 14.9997 12 14.9997Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_533_4034"><rect width="24" height="23.9997" fill="white" transform="translate(0 -0.000152588)"/></clipPath></defs></svg>',
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3.74944H3.75V10.4994H10.5V3.74944Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13.4994H13.5V20.2494H20.25V13.4994Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 13.4994H3.75V20.2494H10.5V13.4994Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8447 10.2525C17.8447 10.6667 17.5089 11.0025 17.0947 11.0025C16.6805 11.0025 16.3447 10.6667 16.3447 10.2525L16.3447 7.74944H14C13.5858 7.74944 13.25 7.41365 13.25 6.99944C13.25 6.58522 13.5858 6.24944 14 6.24944H16.3447L16.3447 3.74944C16.3447 3.33522 16.6805 2.99944 17.0947 2.99944C17.5089 2.99944 17.8447 3.33522 17.8447 3.74944V6.24944H20.5031C20.9173 6.24944 21.2531 6.58522 21.2531 6.99944C21.2531 7.41365 20.9173 7.74944 20.5031 7.74944H17.8447V10.2525Z" fill="#425DC7"/></svg>',
  ];
  let dataAside = ["resume", "sales", "requests", "finance", "config", "tools"];
  let asideLinks = [
    "",
    '<ul class="aside__item--sales aside__links"><li class="aside__item--links"><a href="">Gerador de link</a></li><li class="aside__item--links"><a href="">Vitrine digital de</a></li><li class="aside__item--links"><a href="">Carrinhos compartilháveis</a></li><li class="aside__item--links"><a href="">Carrinhos abandonados</a></li></ul>',
    "",
    '<ul class="aside__item--finance aside__links"><li class="aside__item--links"><a href="">Pagamentos</a></li><li class="aside__item--links"><a href="">Comissões</a></li><li class="aside__item--links"><a href="">Bônus de Perfomance</a></li></ul>',
    '<ul class="aside__item--config aside__links"><li class="aside__item--links"><a href="">Membros</a></li><li class="aside__item--links"><a href="">Gerais</a></li><li class="aside__item--links"><a href="">Customizações</a></li><li class="aside__item--links"><a href="">White Label</a></li></ul>',
    '<ul class="aside__item--tools aside__links"><li class="aside__item--links"><a class="item--anchor" href="">Hubly Store</a></li><li class="aside__item--links"><a class="item--anchor" href="">Retailer Form</a></li><li class="aside__item--links"><a href="">Retailer Cluster</a></li><li class="aside__item--links"><a href="">Retailer Invoice</a></li></ul>',
    "",
  ];

  const dataMenu = await getData("https://test-final.b8one.academy/menu");
  const asideMenu = document.querySelector(".aside_-bar--items");

  dataMenu.menuTree.forEach((item, index) => {
    asideMenu.insertAdjacentHTML(
      "beforeend",
      `
    <li class="aside__bar--item ${
      item.hasChildren ? "aside__arrow" : ""
    }" data-item="${dataAside[index]}">
    ${asideIcons[index]}
    <div class="aside__item--info aside__item--name  ${
      dataAside[index]
    }--item ${index === 0 ? "aside__item--active" : ""}" >
    ${item.name}
    ${
      item.hasChildren
        ? '<svg class="aside__item--arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50024 9.74963L12.0002 14.2496L16.5002 9.74963" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : ""
    }
    </div>
    </li>
    `
    );
    if (item.hasChildren) {
      asideMenu.insertAdjacentHTML("beforeend", asideLinks[index]);
    }
  });

  await asideItemsLink();
  await asideLinksAnimation();
}

async function populateUser() {
  const dataUser = await getData("https://test-final.b8one.academy/user");
  document.querySelector(".info__org--name").innerHTML = dataUser.organization;
  const userArea = document.querySelector(".dropdown__user.user__profile");

  userArea.insertAdjacentHTML(
    "afterbegin",
    `
  <img class="user__profile--avatar" src=${dataUser.photo} alt="" referrerpolicy="no-referrer">
  <span class="user__profile--name">${dataUser.username}</span>
  `
  );
}

async function populateSales() {
  const dataSales = await getData("https://test-final.b8one.academy/sales");
  const salesGroup = document.querySelector(".sales__group");
  const salesIcons = [
    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#F1F2F9"/><path d="M24 37.3333C31.3638 37.3333 37.3333 31.3638 37.3333 24C37.3333 16.6362 31.3638 10.6667 24 10.6667C16.6362 10.6667 10.6667 16.6362 10.6667 24C10.6667 31.3638 16.6362 37.3333 24 37.3333Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 18.6667H22.8889C21.2933 18.6667 20 19.8606 20 21.3333C20 22.8061 21.2933 24 22.8889 24H25.1111C26.7067 24 28 25.1938 28 26.6667C28 28.1395 26.7067 29.3333 25.1111 29.3333H20" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 16V18.6667" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 29.3333L24 32" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="49" height="48"viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.666656" width="48" height="48" rx="12" fill="#F1F2F9"/><path d="M17.5 12L13.6667 16.8V33.6C13.6667 34.2365 13.9359 34.847 14.4152 35.2971C14.8944 35.7471 15.5444 36 16.2222 36H34.1111C34.7889 36 35.4389 35.7471 35.9182 35.2971C36.3974 34.847 36.6667 34.2365 36.6667 33.6V16.8L32.8333 12H17.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.6667 16.8002H36.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.2781 21.5999C30.2781 22.8739 29.7396 24.0957 28.7811 24.9965C27.8226 25.8974 26.5226 26.4035 25.167 26.4035C23.8115 26.4035 22.5114 25.8974 21.5529 24.9965C20.5944 24.0957 20.0559 22.8739 20.0559 21.5999" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.333313" width="48" height="48" rx="12" fill="#F1F2F9"/><path d="M37.8577 27.5374L27.8846 37.5105C27.6262 37.7691 27.3194 37.9743 26.9817 38.1143C26.644 38.2543 26.282 38.3264 25.9164 38.3264C25.5508 38.3264 25.1888 38.2543 24.8511 38.1143C24.5134 37.9743 24.2066 37.7691 23.9482 37.5105L12.5866 26.1621C12.211 25.7869 12 25.2779 12 24.747V13.6667C12 12.5621 12.8954 11.6667 14 11.6667H25.081C25.6114 11.6667 26.1202 11.8774 26.4952 12.2524L37.8577 23.6149C38.3758 24.1361 38.6666 24.8412 38.6666 25.5761C38.6666 26.3111 38.3758 27.0161 37.8577 27.5374Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 19.6667H20.0133" stroke="#425DC7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ];
  let salesName = ["Faturamento", "Vendas totais", "Ticket médio"];

  const dados = Object.keys(dataSales);
  dados.forEach((dado, index) => {
    salesGroup.insertAdjacentHTML(
      "beforeend",
      `<div class="sales__group--item">
    ${salesIcons[index]}
    <div class="sales__group--info">
      <span class="group__info--name">${salesName[index]}</span>
      <h3 class="group__info--price">${formatter(dataSales[dado])}</h3>
    </div>
    </div>`
    );
  });

  // Formatação do Ticket e Faturamento para ter "," e "."
  function formatter(dado) {
    switch (dado) {
      case 80080300:
        let revenuesFormatted = String(dataSales.revenues);
        revenuesFormatted =
          revenuesFormatted.substring(0, 3) +
          "." +
          revenuesFormatted.substring(3, revenuesFormatted.length);
        revenuesFormatted =
          revenuesFormatted.substring(0, 7) +
          "," +
          revenuesFormatted.substring(7, revenuesFormatted.length);
        return "R$ " + revenuesFormatted;
        break;

      case 1830:
        const dinheiro = dado.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 0,
        });
        return dinheiro;
        break;

      case 43759:
        let ticketFormatted = String(dado);
        ticketFormatted =
          ticketFormatted.substring(0, 3) +
          "," +
          ticketFormatted.substring(3, ticketFormatted.length);
        return "R$ " + ticketFormatted;
        break;
    }
  }
}

async function populateResellers() {
  const dataResellers = await getData(
    "https://test-final.b8one.academy/resellers/ranking"
  );
  const ulRessellers = document.querySelector(".ranking__list--scroll");
  const ressellersIcons = [
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#F1F2F9"></circle>  <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"></path></svg>',
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <circle cx="20" cy="20" r="20" fill="#F1F2F9"></circle>  <path d="M15.2564 26H11.4893V14.3636H15.3757C16.5159 14.3636 17.495 14.5966 18.3132 15.0625C19.1314 15.5246 19.7583 16.1894 20.1939 17.0568C20.6333 17.9205 20.853 18.9564 20.853 20.1648C20.853 21.3769 20.6314 22.4186 20.1882 23.2898C19.7488 24.161 19.1125 24.8314 18.2791 25.3011C17.4458 25.767 16.4382 26 15.2564 26ZM13.245 24.4659H15.1598C16.0462 24.4659 16.7829 24.2992 17.37 23.9659C17.9571 23.6288 18.3965 23.142 18.6882 22.5057C18.9799 21.8655 19.1257 21.0852 19.1257 20.1648C19.1257 19.2519 18.9799 18.4773 18.6882 17.8409C18.4003 17.2045 17.9704 16.7216 17.3984 16.392C16.8265 16.0625 16.1162 15.8977 15.2678 15.8977H13.245V24.4659ZM23.0362 26V14.3636H24.7919V24.4886H30.0646V26H23.0362Z" fill="#425DC7"></path></svg>',
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <circle cx="20" cy="20" r="20" fill="#F1F2F9"/><path d="M11.3956 26V14.3636H15.657C16.4827 14.3636 17.1664 14.5 17.7081 14.7727C18.2498 15.0417 18.6551 15.4072 18.924 15.8693C19.1929 16.3277 19.3274 16.8447 19.3274 17.4205C19.3274 17.9053 19.2384 18.3144 19.0604 18.6477C18.8823 18.9773 18.6437 19.2424 18.3445 19.4432C18.049 19.6402 17.7232 19.7841 17.3672 19.875V19.9886C17.7536 20.0076 18.1304 20.1326 18.4979 20.3636C18.8691 20.5909 19.1759 20.9148 19.4183 21.3352C19.6607 21.7557 19.782 22.267 19.782 22.8693C19.782 23.464 19.6418 23.9981 19.3615 24.4716C19.085 24.9413 18.657 25.3144 18.0774 25.5909C17.4979 25.8636 16.7573 26 15.8558 26H11.3956ZM13.1513 24.4943H15.6854C16.5263 24.4943 17.1286 24.3314 17.4922 24.0057C17.8558 23.6799 18.0376 23.2727 18.0376 22.7841C18.0376 22.4167 17.9448 22.0795 17.7592 21.7727C17.5736 21.4659 17.3085 21.2216 16.9638 21.0398C16.6229 20.858 16.2176 20.767 15.7479 20.767H13.1513V24.4943ZM13.1513 19.3977H15.5036C15.8975 19.3977 16.2517 19.322 16.5661 19.1705C16.8842 19.0189 17.1361 18.8068 17.3217 18.5341C17.5111 18.2576 17.6058 17.9318 17.6058 17.5568C17.6058 17.0758 17.4373 16.6723 17.1001 16.3466C16.763 16.0208 16.246 15.858 15.549 15.858H13.1513V19.3977ZM28.2109 17.4205C28.1503 16.8826 27.9003 16.4659 27.4609 16.1705C27.0215 15.8712 26.4685 15.7216 25.8018 15.7216C25.3246 15.7216 24.9117 15.7973 24.5632 15.9489C24.2147 16.0966 23.9439 16.3011 23.7507 16.5625C23.5613 16.8201 23.4666 17.1136 23.4666 17.4432C23.4666 17.7197 23.531 17.9583 23.6598 18.1591C23.7924 18.3598 23.9647 18.5284 24.1768 18.6648C24.3928 18.7973 24.6238 18.9091 24.87 19C25.1162 19.0871 25.353 19.1591 25.5803 19.2159L26.7166 19.5114C27.0878 19.6023 27.4685 19.7254 27.8587 19.8807C28.2488 20.036 28.6106 20.2405 28.9439 20.4943C29.2772 20.7481 29.5462 21.0625 29.7507 21.4375C29.959 21.8125 30.0632 22.2614 30.0632 22.7841C30.0632 23.4432 29.8928 24.0284 29.5518 24.5398C29.2147 25.0511 28.7242 25.4545 28.0803 25.75C27.4401 26.0455 26.6655 26.1932 25.7564 26.1932C24.8852 26.1932 24.1314 26.0549 23.495 25.7784C22.8587 25.5019 22.3606 25.1098 22.0007 24.6023C21.6409 24.0909 21.442 23.4848 21.4041 22.7841H23.1655C23.1996 23.2045 23.3359 23.5549 23.5746 23.8352C23.817 24.1117 24.1257 24.3182 24.5007 24.4545C24.8795 24.5871 25.2943 24.6534 25.745 24.6534C26.2412 24.6534 26.6825 24.5758 27.0689 24.4205C27.459 24.2614 27.7659 24.0417 27.9893 23.7614C28.2128 23.4773 28.3246 23.1458 28.3246 22.767C28.3246 22.4223 28.2261 22.1402 28.0291 21.9205C27.8359 21.7008 27.5727 21.5189 27.2393 21.375C26.9098 21.2311 26.5367 21.1042 26.12 20.9943L24.745 20.6193C23.8132 20.3655 23.0746 19.9924 22.5291 19.5C21.9875 19.0076 21.7166 18.3561 21.7166 17.5455C21.7166 16.875 21.8984 16.2898 22.2621 15.7898C22.6257 15.2898 23.1181 14.9015 23.7393 14.625C24.3606 14.3447 25.0613 14.2045 25.8416 14.2045C26.6295 14.2045 27.3246 14.3428 27.9268 14.6193C28.5329 14.8958 29.0102 15.2765 29.3587 15.7614C29.7072 16.2424 29.889 16.7955 29.9041 17.4205H28.2109Z" fill="#425DC7"/></svg>',
    '  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>  <path d="M8.62216 14.3636H10.7528L14.4574 23.4091H14.5938L18.2983 14.3636H20.429V26H18.7585V17.5795H18.6506L15.2188 25.983H13.8324L10.4006 17.5739H10.2926V26H8.62216V14.3636ZM32.3736 14.3636V26H30.7599L24.8452 17.4659H24.7372V26H22.9815V14.3636H24.6065L30.527 22.9091H30.6349V14.3636H32.3736Z" fill="#425DC7"/>  </svg>       ',
    '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>  <path d="M9.81818 14.3636H11.8125L14.8523 19.6534H14.9773L18.017 14.3636H20.0114L15.7898 21.4318V26H14.0398V21.4318L9.81818 14.3636ZM30.7401 18.1477H28.9673C28.8991 17.7689 28.7723 17.4356 28.5866 17.1477C28.401 16.8598 28.1738 16.6155 27.9048 16.4148C27.6359 16.214 27.3348 16.0625 27.0014 15.9602C26.6719 15.858 26.3215 15.8068 25.9503 15.8068C25.2798 15.8068 24.6795 15.9754 24.1491 16.3125C23.6226 16.6496 23.206 17.1439 22.8991 17.7955C22.5961 18.447 22.4446 19.2424 22.4446 20.1818C22.4446 21.1288 22.5961 21.928 22.8991 22.5795C23.206 23.2311 23.6245 23.7235 24.1548 24.0568C24.6851 24.3902 25.2817 24.5568 25.9446 24.5568C26.312 24.5568 26.6605 24.5076 26.9901 24.4091C27.3234 24.3068 27.6245 24.1572 27.8935 23.9602C28.1624 23.7633 28.3897 23.5227 28.5753 23.2386C28.7647 22.9508 28.8954 22.6212 28.9673 22.25L30.7401 22.2557C30.6454 22.8277 30.4616 23.3542 30.1889 23.8352C29.92 24.3125 29.5734 24.7254 29.1491 25.0739C28.7287 25.4186 28.2476 25.6856 27.706 25.875C27.1643 26.0644 26.5734 26.1591 25.9332 26.1591C24.9257 26.1591 24.0279 25.9205 23.2401 25.4432C22.4522 24.9621 21.831 24.2746 21.3764 23.3807C20.9257 22.4867 20.7003 21.4205 20.7003 20.1818C20.7003 18.9394 20.9276 17.8731 21.3821 16.983C21.8366 16.089 22.4579 15.4034 23.2457 14.9261C24.0336 14.4451 24.9295 14.2045 25.9332 14.2045C26.5507 14.2045 27.1264 14.2936 27.6605 14.4716C28.1984 14.6458 28.6813 14.9034 29.1094 15.2443C29.5374 15.5814 29.8916 15.9943 30.1719 16.483C30.4522 16.9678 30.6416 17.5227 30.7401 18.1477Z" fill="#425DC7"/>  </svg>     ',
  ];

  dataResellers.resellers.forEach((item, index) => {
    ulRessellers.insertAdjacentHTML(
      "beforeend",
      `<li class="ranking__list--item">
        <span class="ranking__list--position">${index + 1}º</span>
        ${ressellersIcons[index]}            
        <div class="ranking__list--person">
          <h3 class="ranking__list--name">${item.name}</h3>
          <div class="ranking__list--status">
            <span class="list__status--requests">${
              item.ordersCount
            } pedidos</span>
            <div class="list__status--percentage">
              <span class="list__status--number ${
                item.percentage === "+18%"
                  ? "number__status--positive"
                  : "number__status--negative"
              }">${item.percentage}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke=${
                item.percentage === "+18%" ? "#158F2E" : "#EB0045"
              } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
      </li>`
    );
  });
}

async function populateProductMoreSold() {
  const dataProductMoreSold = await getData(
    "https://test-final.b8one.academy/products/more-sold"
  );
  const tableBody = document.querySelector(".main__table--body");

  dataProductMoreSold.products.forEach((product, index) => {
    let formattedPrice = String(product.price);
    formattedPrice =
      formattedPrice.substring(0, 1) +
      "." +
      formattedPrice.substring(1, formattedPrice.length);
    formattedPrice =
      formattedPrice.substring(0, 5) +
      "," +
      formattedPrice.substring(5, formattedPrice.length);

    tableBody.insertAdjacentHTML(
      "beforeend",
      `
      <tr class="main__table--row ${
        index % 2 === 0 ? null : "background-purple"
      }">
        <td class="main__table--content">
            <span class="main__table--position">${index + 1}</span>
              <div class="main__table--line">
                <img src=${product.image} alt="${product.name}" referrerpolicy="no-referrer">
                <span class="main__table--name">${product.name}</span>
              </div>
        </td>
        <td class="main__table--numberId">${product.orderId}</td>
        <td class="main__table--departament">${product.department}</td>
        <td class="main__table--price">R$ ${formattedPrice}</td>
    </tr>
  `
    );
  });
}

// Tabs function ===========================
const generalReport = document.querySelector(".general__report");
const resealesRanking = document.querySelector(".resales__ranking");
const generalReportBlock = document.querySelector(".general__report--block");

function openCity(evt, cityName) {
  let query = window.matchMedia("(min-width: 763px)");
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";
  if (cityName === "Revendedores") {
    resealesRanking.style.display = "block";
    generalReport.style.display = "flex";
    generalReportBlock.style.marginRight = "64px";
    if (window.matchMedia("(max-width: 985px)").matches) {
      generalReportBlock.style.width = "100%";
    } else {
      generalReportBlock.style.width = "65%";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 985) {
        generalReportBlock.style.width = "65%";
      } else if (window.innerWidth < 985) {
        generalReportBlock.style.width = "100%";
      }
    });
  } else {
    generalReportBlock.style.width = "100%";
    resealesRanking.style.display = "none";
    generalReport.style.display = "block";
  }
}
document.getElementById("defaultOpen").click();

// Graficos ===============================

function Graphs() {
  {
    const labels = [
      "06/10/21",
      "07/10/21",
      "08/10/21",
      "09/10/21",
      "10/10/21",
      "11/10/21",
      "12/10/21",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Estornado",
          backgroundColor: "rgba(66, 93, 199, 1)",
          borderColor: "rgba(66, 93, 199, 1)",
          data: [0, 0, 50, 75, 60, 50, 170],
        },
        {
          label: "Cancelado",
          data: [0, 59, 80, 81, 56, 55, 200],
          backgroundColor: "rgba(240, 52, 96, 1)",
          borderColor: "rgba(240, 52, 96, 1)",
        },
        {
          label: "Não pago",
          data: [0, 0, 50, 75, 60, 50, 170],
          backgroundColor: "rgba(255, 190, 0, 1)",
          borderColor: "rgba(255, 190, 0, 1)",
        },
        {
          label: "Pago",
          data: [0, 60, 150, 54, 54, 95, 100],
          fill: false,
          backgroundColor: "rgba(46, 176, 66, 1)",
          borderColor: "rgba(46, 176, 66, 1)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        fill: false,
        interaction: {
          intersect: false,
        },
        radius: 0,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    myChart.canvas.parentNode.style.height = "291px";
    myChart.canvas.parentNode.style.width = "100%";
  }

  {
    const labels = [
      "06/10/21",
      "07/10/21",
      "08/10/21",
      "09/10/21",
      "10/10/21",
      "11/10/21",
      "12/10/21",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Estornado",
          backgroundColor: "rgba(66, 93, 199, 1)",
          borderColor: "rgba(66, 93, 199, 1)",
          data: [0, 30, 100, 100, 150, 25, 150],
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        fill: false,
        interaction: {
          intersect: false,
        },
        radius: 0,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
    };

    const secondGraph = new Chart(
      document.getElementById("secondGraph"),
      config
    );

    secondGraph.canvas.parentNode.style.height = "291px";
    secondGraph.canvas.parentNode.style.width = "100%";
  }

  {
    const labels = [
      "06/10/21",
      "07/10/21",
      "08/10/21",
      "09/10/21",
      "10/10/21",
      "11/10/21",
      "12/10/21",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Estornado",
          backgroundColor: "rgba(66, 93, 199, 1)",
          borderColor: "rgba(66, 93, 199, 1)",
          data: [0, 30, 20, 54, 54, 95, 100],
        },
        {
          label: "Cancelado",
          data: [0, 10, 80, 81, 56, 55, 200],
          backgroundColor: "rgba(240, 52, 96, 1)",
          borderColor: "rgba(240, 52, 96, 1)",
        },
        {
          label: "Pago",
          data: [0, 10, 50, 100, 50, 200, 200],
          fill: false,
          backgroundColor: "rgba(46, 176, 66, 1)",
          borderColor: "rgba(46, 176, 66, 1)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        fill: false,
        interaction: {
          intersect: false,
        },
        radius: 0,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 200,
        },
      },
    };

    const thirdGraph = new Chart(document.getElementById("thirdGraph"), config);

    thirdGraph.canvas.parentNode.style.height = "291px";
    thirdGraph.canvas.parentNode.style.width = "100%";
    thirdGraph.canvas.parentNode.style.zIndex = "0";
  }
}

// aside__item--links ========================
async function asideLinksAnimation() {
  const itemLinks = [...document.querySelectorAll(".aside__item--links")];

  itemLinks.forEach((link) => {
    link.addEventListener("mousemove", function () {
      this.firstChild.style.color = "#425DC7";
    });
    link.addEventListener("mouseleave", function () {
      this.firstChild.style.color = "#333333";
    });
  });
}

// report buttons =============================
function reportBtns() {
  const reportBtns = document.querySelectorAll(".report__button");
  reportBtnsArray = [...reportBtns];
  reportBtnsArray.forEach((button) => {
    button.addEventListener("click", function () {
      reportBtnsArray.forEach((btn) => {
        btn.classList.remove("report__button--active");
      });
      this.classList.toggle("report__button--active");
    });
  });
}

// dropdowns aside ============================

async function asideItemsLink() {
  const asideArrowsItens = [...document.querySelectorAll(".aside__arrow")];
  const asideLinks = [...document.querySelectorAll(".aside__links")];
  const asideArrows = [...document.querySelectorAll(".aside__item--arrow")];

  function removeActive() {
    asideLinks.forEach((link) => link.classList.add("hidden"));
    asideArrows.forEach((arrow) => arrow.classList.remove("arrow--active"));
  }

  asideLinks.forEach((link) => link.classList.add("hidden"));

  asideArrowsItens.forEach((ArrowItem) => {
    ArrowItem.addEventListener("click", function () {
      const pickArrow = this.querySelector(".aside__item--arrow");
      const elementLink = document.querySelector(
        `.aside__item--${this.dataset.item}`
      );
      pickArrow.style.transition = "all ease-in-out .5s";
      pickArrow.classList.toggle("arrow--active");

      if (elementLink.classList.contains("hidden")) {
        removeActive();
        elementLink.classList.remove("hidden");
        pickArrow.classList.add("arrow--active");
      } else {
        elementLink.classList.add("hidden");
        pickArrow.classList.remove("arrow--active");
        removeActive();
      }
    });
  });
}

// HamburguerNav animation ========================
function HamburguerAnimation() {
  const hamburguer = document.querySelector(".nav__hamburguer");
  const closeNav = document.querySelector(".close-navbar");
  const aside = document.querySelector(".aside__bar");

  hamburguer.addEventListener("click", () => {
    aside.classList.add("show");
    document.getElementById("mySidenav").style.width = "245px";
    hamburguer.style.display = "none";
    closeNav.style.display = "block";
  });

  closeNav.addEventListener("click", () => {
    aside.classList.remove("show");
    document.getElementById("mySidenav").style.transform = "translateX(-100)";
    hamburguer.style.display = "block";
    closeNav.style.display = "none";
    closeNav.style.cursor = "pointer";
  });
}

const leaveBtn = document.querySelector(".user__options--leave");
leaveBtn.addEventListener(
  "click",
  () => (window.location.href = "../../login.html")
);
