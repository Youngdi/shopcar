const ITEM = [
  {
    id: "item-grouper",
    name: "龍膽石斑魚",
    desc: "龍膽石斑魚（200g)",
    explain:
      "龍膽石斑是非常頂級的魚種，嚴選六到八公斤的龍膽石斑，膠質及魚肉的比例最好，鮮美無腥味，Q彈口感，魚皮膠質厚實又天然。煮湯、清蒸都是最頂級料理。",
    price: 320,
    pic: "./picture/item-grouper.jpg",
  },
  {
    id: "item-lobster",
    name: "野生龍蝦",
    desc: "野生龍蝦2尾（550g)",
    explain:
      "鮮活的時候肉質與色澤呈現晶瑩白淨，肉質更鮮美細膩彈牙，菜龍蝦頭更是特別地紮實香鮮甜，營養價 值在海產品中更是名列前茅。",
    price: 1020,
    pic: "./picture/item-lobster.jpg",
  },
  {
    id: "item-clam",
    name: "厚蛤蜊",
    desc: "厚蛤蜊（一斤）",
    explain:
      "澎湖海邊退潮，海灘上撿拾厚蛤蜊，其為一種天然的食材，用來煮湯(麵)或拌炒高麗菜，更是鮮甜味美，符合現代消費者的天然健康概念。",
    price: 480,
    pic: "./picture/item-clam.jpg",
  },
  {
    id: "item-shrimp",
    name: "野生大明蝦",
    desc: "野生大明蝦 4隻（360g)",
    explain:
      "野生大明蝦因生長環境要求高、生長時間較長，所以體型碩大，肉質就是特別脆彈有嚼勁、蝦膏也豐厚濃郁，是媲美龍蝦口感的高級海蝦食材喔！",
    price: 450,
    pic: "./picture/item-shrimp.jpg",
  },
  {
    id: "item-trout",
    name: "鮭魚",
    desc: "鮭魚(400g)",
    explain:
      "鮭魚含有大量的天然魚脂中DHA及EPA，讓鮭魚變得更加美味，可乾煎、燒烤，灑上少許胡椒鹽或檸檬汁食用風味更佳。",
    price: 230,
    pic: "./picture/item-trout.png",
  },
  {
    id: "item-seaweeds",
    name: "野生海菜",
    desc: "野生海菜（160g)",
    explain:
      "生長在澎湖地區礁岩海岸區域。純天然、零污染、純綠的高纖食品，含有高葉綠素與胡蘿蔔素等維生素，可提供營養補給，健康美容。",
    price: 110,
    pic: "./picture/item-seaweeds.jpg",
  },
  {
    id: "item-squid",
    name: "小管",
    desc: "小管（180g)",
    explain:
      "新鮮小管只需稍微退冰，簡單川燙就能吃到超棒的海味，在口中越嚼越甜！小管熱量低營養豐富，加上澎湖海域海水鹽分高，口感特別甜。",
    price: 170,
    pic: "./picture/item-squid.jpg",
  },
  {
    id: "item-crab",
    name: "螃蟹",
    desc: "螃蟹4隻(一斤）",
    explain:
      "澎湖螃蟹都是採海撈非養殖，所以要提前預訂，每隻帶著滿滿蟹黃的螃蟹真是極品，肉質飽滿口感較為結實，蟹殼及身體裡佈滿蟹黃，這真的是超銷魂的螃蟹極品！",
    price: 1300,
    pic: "./picture/item-crab.jpg",
  },
  {
    id: "item-sea-urchins",
    name: "海膽",
    desc: "海膽1顆",
    explain:
      "味道鮮美，常是昂貴的料理佳餚，新鮮海膽為橙黃色，味道甘甜鮮美，營養豐富，含大量DHA及鈣，成人及小孩皆適宜食用。",
    price: 250,
    pic: "./picture/item-sea-urchins.jpg",
  },
  {
    id: "item-oyster",
    name: "蚵仔",
    desc: "蚵仔(一斤）",
    explain:
      "又稱為喔「海中牛奶」，營養滿點，蛋白質豐富！澎湖的海養出來的蚵仔特別特別鮮甜而紮實，軟嫩肥美，貝柱彈牙，簡單加薑絲就可以煮出非常鮮美的蚵仔湯！",
    price: 100,
    pic: "./picture/item-oyster.jpg",
  },
  {
    id: "item-scallops",
    name: "干貝",
    desc: "干貝（300g) ",
    explain:
      "澎湖海域的鮮美干貝顆顆鮮Q口感扎實，只要簡單川燙就很美味。絲絲甘甜、細緻濃郁，干貝中的極品。適合煎烤、煮火鍋、熱炒。",
    price: 1200,
    pic: "./picture/item-scallops.png",
  },
  {
    id: "item-abalone",
    name: "七星鮑魚",
    desc: "七星鮑魚（300g)",
    explain:
      "野生七星鮑魚，每一顆都是人工採集，人工去殼後熟凍鎖住最鮮甜的滋味，每一顆都是非常的珍貴！雖然小顆但每顆都飽滿厚實，口感非常的Q彈，超鮮甜！",
    price: 320,
    pic: "./picture/item-abalone.jpg",
  },
];

function adder() {
  var count = document.getElementById("countCar").innerHTML;
  count = parseInt(count) +1;
  document.getElementById("countCar").innerHTML = count;
}
function minuser() {
  var count = document.getElementById("countCar").innerHTML;
  if (count <= 0) {
    count = 0;
  } else {
    count = parseInt(count) - 1;
  }
  document.getElementById("countCar").innerHTML = count;
}
function addToCar(e, id, price) {
  const parent = e.parentElement.parentElement;
  const totalElm = parent.children[2];
  const quantity = parent.children[1].children[0].value;
  const totalPrice = price * Number(quantity);
  totalElm.innerText = totalPrice;
  window.shopcar = {
    ...window.shopcar,
    [id]: {
      total: totalPrice,
    },
  };

  const check_shopcar = document.getElementById("check_shopcar");
  let shopcar_detail_header = `<h1><i class="fa-solid fa-cart-shopping" style="padding: 5px;"></i>購物車</h1>`;
  let shopcar_detail = "";
  let shopcar_detail_content = "";
  let bill = 0;
  for (const [key, value] of Object.entries(window.shopcar)) {
    shopcar_detail_content =
      shopcar_detail_content +

      `
      <div class="shopcar_row">
        <a style="color:black; font-size: 20px">${ITEM.find((i) => i.id === key).name}</a>
        
      <span style="color: black; font-size: 20px" class="price">$${value.total} 
        <div><ul class="counter">
        <li id="plus"><input type="button" onclick="adder()" value="+" /></li>
        <li id="countCar">1</li>
        <li id="minus"><input type="button" onclick="minuser()" value="-" /></li>
        </ul></div><br></span>
      </div>`;

    bill = bill + value.total;
  }



  let shopcar_detail_footer = `<hr />
    <div class="shopcar_footer">
      <h2>
        <span class="price" style="color: black">
        <b>共${Object.keys(window.shopcar).length
    }項</b>
        </span>
      <h2>
      <h2>
        <span class="price" style="color: black">
        <b>總計$${bill}</b>
        </span>
      </h2>
    </div>`;
  shopcar_detail =
    shopcar_detail_header + shopcar_detail_content + shopcar_detail_footer;
  check_shopcar.innerHTML = shopcar_detail;
}

function generateItems() {
  const item_row = document.getElementById("item_row");
  let content = "";
  ITEM.forEach((i) => {
    content =
      content +
      `<div class="column">
    <div class="card">
        <h2>${i.name}</h2>
        <img width="200px" height="200px" src="${i.pic}" alt="">
        <p>${i.desc}</p>
        <p>${i.explain}</p>
        <table>
            <tr>
                <td>售價</td>
                <td>數量</td>
                <td>小計</td>
                <td></td>
            </tr>
            <tr>
                <td>${i.price}</td>
                <td>
                    <select name="lobster" value="0">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </td>
                <td>0</td>
                <td>
                <button style="font-size: 16px" onclick="addToCar(this, '${i.id}', ${i.price})">
                加入<div class="fa-solid fa-cart-shopping"></div>
                </button>
                </td>
            </tr>
        </table>
    </div>
    </div>`;
  });
  item_row.innerHTML = content;
}

setTimeout(() => {
  generateItems();
}, 100);

window.addToCar = addToCar;
window.adder = adder;
window.minuser = minuser;

window.shopcar = {};