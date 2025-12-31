// ****************************************************************
// **   Author: Element Terry, aka Jimmy Styles, aka Lorem isDumb   
// **   Date:   Dec 28, 2025
// **
// **   Audio credits to pixabay
// **   https://pixabay.com/sound-effects/carousel-ride-30072/
// **   https://pixabay.com/sound-effects/error-08-206492/ 
// **   https://pixabay.com/sound-effects/take-it-90781/
// ** 
// *****************************************************************

// ***  Global Variables  ***
let   logoIndex=0;

const logos=[
  {name:'MasterCard',
   source:'https://s3-symbol-logo.tradingview.com/mastercard--big.svg'},
  {name:'Amazon',
   source:'https://s3-symbol-logo.tradingview.com/amazon--big.svg'},
  {name:'Shopify',
  source:'https://s3-symbol-logo.tradingview.com/shopify--big.svg'},
  {name:'Google',
  source:'https://s3-symbol-logo.tradingview.com/alphabet--big.svg'},
  {name:'MicroSoft',
   source:'https://s3-symbol-logo.tradingview.com/microsoft--big.svg'},
  {name:'Nvidia',
   source:'https://s3-symbol-logo.tradingview.com/nvidia--big.svg'},
  {name:'Apple',
  source:'https://s3-symbol-logo.tradingview.com/apple--big.svg'},
  {name:'Netflix',
   source:'https://s3-symbol-logo.tradingview.com/netflix--big.svg'},
  {name:'Tesla',
   source:'https://s3-symbol-logo.tradingview.com/tesla--big.svg'},
   {name:'Meta',
   source:'https://s3-symbol-logo.tradingview.com/meta-platforms--big.svg'},
  {name:'Walmart',
  source:'https://s3-symbol-logo.tradingview.com/walmart--big.svg'},
  {name:'AT&T',
  source:'https://s3-symbol-logo.tradingview.com/at-and-t--big.svg'},
  {name:'General Electric',
  source:'https://s3-symbol-logo.tradingview.com/ge-aerospace--big.svg'},
  {name:'Deere',
  source:'https://s3-symbol-logo.tradingview.com/deere--big.svg'},
  {name:'Spotify',
  source:'https://s3-symbol-logo.tradingview.com/spotify-technology--big.svg'},
  {name:'Twitch',
   source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbLx2fPXowHNPZSBQaf82FQgZFYgdjsjy2Q&s'},
  {name:'LG',
source:'https://e7.pngegg.com/pngimages/620/276/png-clipart-lg-logo-lg-v20-lg-electronics-logo-lg-corp-lg-logo-television-text-thumbnail.png'},
  {name:'Robin Hood',
   source:'https://s3-symbol-logo.tradingview.com/robinhood--big.svg'},
  {name:'DoorDash',
  source:'https://s3-symbol-logo.tradingview.com/doordash--big.svg'},
  {name:'McDonalds',
  source:'https://s3-symbol-logo.tradingview.com/mcdonalds--big.svg'},
  {name:'Adobe',
  source:'https://s3-symbol-logo.tradingview.com/adobe--big.svg'},
  {name:'Comcast',
  source:'https://s3-symbol-logo.tradingview.com/comcast--big.svg'},
  {name:'Nike',
  source:'https://s3-symbol-logo.tradingview.com/nike--big.svg'},
  {name:'Monster',
  source:'https://s3-symbol-logo.tradingview.com/monster-beverage--big.svg'},
  {name:'Roblox',
  source:'https://s3-symbol-logo.tradingview.com/roblox--big.svg'},
  {name:'PayPal',
  source:'https://s3-symbol-logo.tradingview.com/paypal--big.svg'},
  {name:'Reddit',
  source:'https://s3-symbol-logo.tradingview.com/reddit--big.svg'},
  {name:'Bitcoin',
  source:'https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg'},
  {name:'Starbucks',
  source:'https://s3-symbol-logo.tradingview.com/starbucks--big.svg'},
  {name:'Playboy',
  source:'https://i.pinimg.com/736x/84/17/fb/8417fbe5745deb80660f339849a87e47.jpg'},
  {name:'Mazda',
  source:'https://logosandtypes.com/wp-content/uploads/2020/07/Mazda.png'},
  {name:'Toyota',
  source:'https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png'},
  {name:'Volkswagen',
  source:'https://s3-symbol-logo.tradingview.com/volkswagen--big.svg'},
  {name:'Hyundai',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIHi2IshVqNqSf5CJKO5TVAVLuqyqt_NKPg&s'},
  {name:'Chanel',
  source:'https://i.pinimg.com/736x/00/b8/8e/00b88e456e66ddc368fd02f27714f64f.jpg'},
  {name:'Puma',
  source:'https://s3-symbol-logo.tradingview.com/puma--big.svg'},
  {name:'Wendys',
  source:'https://i.pinimg.com/736x/4b/72/88/4b7288917fc600cba35a77a73b8dbf8f.jpg'},
  {name:'KFC',
  source:'https://static.vecteezy.com/system/resources/thumbnails/046/201/521/small/russia-kaluga-september-29-2020-kentucky-fried-chicken-restaurant-or-kfc-sign-with-colonel-sanders-image-photo.jpg'},
  {name:'Taco Bell',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JNdnxl7B1_a_LSh6B5q9FPQ2lOgsjnzGIQ&s'},
  {name:'Dominos',
  source:'https://photos.prnewswire.com/prnfull/20120814/DE55948LOGO-b'},
  {name:'Shell',
  source:'https://s3-symbol-logo.tradingview.com/shell--big.svg'},
  {name:'PlayStation',
  source:'https://img.icons8.com/color/1200/play-station.jpg'},
  {name:'Pepsi',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrEEo429eUCEDt7ghsYNL4BLjOMtW3wGS8Q&s'},
  {name:'Mercedes-Benz',
  source:'https://s3-alpha.figma.com/hub/file/1549348164/a235fd4b-8505-4bfd-a4f6-5ecde9174bda-cover.png'},
  {name:'Instagram',
  source:'https://img.freepik.com/premium-vector/instagram-logo_976174-11.jpg?semt=ais_hybrid&w=740&q=80'},
  {name:'WWF',
  source:'https://1000logos.net/wp-content/uploads/2017/05/Emblem-WWF.jpg'},
  {name:'TikTok',
  source:'https://i.pinimg.com/736x/e5/0d/44/e50d44312e73df9e42c64c39aeeeb382.jpg'},
  {name:'Audi',
  source:'https://di-uploads-pod3.dealerinspire.com/vindeversautohausofsylvania/uploads/2018/10/Audi-Logo-Banner.png'},
  {name:'Youtube',
  source:'https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?semt=ais_hybrid&w=740&q=80'},
  {name:'Twitter',
  source:'https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE-1000-80.jpg'},
  {name:'Facebook',
  source:'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'},
  {name:'New York Yankees',
  source:'https://img.icons8.com/ios7/1200/new-york-yankee.jpg'},
  {name:'Real Madrid',
  source:'https://static.vecteezy.com/system/resources/thumbnails/010/994/249/small_2x/real-madrid-logo-symbol-design-spain-football-european-countries-football-teams-illustration-free-vector.jpg'},
  {name:'Chicago Bulls',
  source:'https://i.ebayimg.com/images/g/DM0AAOSwF2xbUkZj/s-l1200.jpg'},
  {name:'Toronto Blue Jays',
  source:'https://namakabottles.com/cdn/shop/collections/Blue-Jays_1400x.jpg?v=1695057232'},
  {name:'Republican',
  source:'https://thumbs.dreamstime.com/b/republican-party-logo-elephant-also-referred-to-as-gop-one-two-major-contemporary-political-parties-united-states-201271064.jpg'},
  {name:'Android',
  source:'https://i.ytimg.com/vi/1oPCgP-U3Xc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBxOVnFAmi9fPSFyJVjA6f_J0UGTQ'},
  {name:'Wikipedia',
  source:'https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2022/10/Wikipedia.jpg'},
  {name:'ChatGPT',
  source:'https://c8.alamy.com/comp/2R1CG61/chatgpt-black-logo-on-white-background-vector-illustration-2R1CG61.jpg'},
  {name:'Github',
  source:'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'},
  {name:'Mitsubishi',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKs3PHPCZZm0i7ZfWATJL3iZDDsAuahRzKg&s'},
  {name:'Skoda',
  source:'https://www.carlogos.org/logo/Skoda-logo-640x480.jpg'},
  {name:'European Union',
  source:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/330px-Flag_of_Europe.svg.png'},
  {name:'Čez',
  source:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/%C4%8CEZ_Group_logo.svg/1200px-%C4%8CEZ_Group_logo.svg.png'},
  {name:'Target',
  source:'https://s3-symbol-logo.tradingview.com/target--big.svg'},
  {name:'Pinterest',
  source:'https://i.pinimg.com/736x/86/0c/87/860c87633f4de3aae800d9c948cbebdd.jpg'},
  {name:'SnapChat',
  source:'https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg'},
  {name:'Lexus',
  source:'https://i.pinimg.com/736x/30/00/21/300021912c24ed0f4a940f3f8a3c1cf2.jpg'},
  {name:'Yahoo',
  source:'https://1000logos.net/wp-content/uploads/2017/05/Color-Yahoo-logo.jpg'},
  {name:'Suzuki',
  source:'https://s3-symbol-logo.tradingview.com/suzuki--big.svg'},
  {name:'Michelin',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgEO27QNsqZexCpBArXQ8Giu378a392wsyg&s'},
  {name:'Lacoste',
  source:'https://i.pinimg.com/736x/70/67/e2/7067e2a36888b59fdc990c38980e066d.jpg'},
  {name:'PBS',
  source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/PBS_logo_2019_%28Symbol%29.svg/1200px-PBS_logo_2019_%28Symbol%29.svg.png'},
  {name:'Chase Manhattan',
  source:'https://i.pinimg.com/564x/96/94/fe/9694fe70e6922d8660359aea958555ae.jpg'},
  {name:'British Petroleum',
   source:'https://companieslogo.com/img/orig/BP-6284f908.png?t=1720244491'},
  {name:'HSBC',
  source:'https://create.hsbc/content/dam/brandhub/brand/ld-history/hexagon_1192x671.jpg'},
  {name:'Addidas',
  source:'https://images.squarespace-cdn.com/content/v1/570ea2a404426208124fcdaf/1500083352311-JPUXZT0UHW0JLFN1V202/image-asset.jpeg?format=1500w'},
  {name:'Red Bull',
  source:'https://www.nicepng.com/png/detail/32-328155_red-bull-logo-red-bull-logo-one-color.png'},
  {name:'Yellow Pages',
  source:'https://i.redd.it/aaigmnt3f3ua1.jpg'},
  {name:'CBC',
  source:'https://substackcdn.com/image/fetch/$s_!R8RC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F977b2ed7-f95d-41b4-82c8-17bb0b13766e_1100x1100.jpeg'},
  {name:'Motorola',
  source:'https://s3-symbol-logo.tradingview.com/motorola-solutions--big.svg'},
  {name:'Gucci',
  source:'https://1000logos.net/wp-content/uploads/2017/01/Colors-Gucci-Logo.jpg'},
  {name:'Airbnb',
   source:'https://s3-symbol-logo.tradingview.com/airbnb--big.svg'},
  {name:'Versace',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMkUUSI5KQ5vhRDuP-qpzfzdsofoSdSUjfg&s'},
  {name:'Under Armour',
  source:'https://s3-symbol-logo.tradingview.com/under-armour--big.svg'},
  {name:'Gatorade',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wODRWBCWpjSnWxJAP_8uCQpxhnNosCDZ9g&s'},
  {name:'CBS',
  source:'https://substackcdn.com/image/fetch/$s_!H0ap!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F61d20e66-2f7e-4ee0-9c14-b7b0b893ab6b_1300x1300.jpeg'},
  {name:'Disney',
  source:'https://i.pinimg.com/736x/f3/b8/82/f3b8821763c462bbdd24951da04d8740.jpg'},
  {name:'BMW',
  source:'https://p7.hiclipart.com/preview/144/95/802/bmw-z4-car-logo-mini-bmw-logo-thumbnail.jpg'},
  {name:'Goodyear',
  source:'https://i.pinimg.com/736x/b5/11/8a/b5118a1cecd9f78c709cc9460f82ce3a.jpg'},
  {name:'Westinghouse',
  source:'https://westinghouse.com/cdn/shop/files/Westinghouse-circle-W-white_350x.png?v=1683835037'},
  {name:'Planters',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcTEpa6hj0c9M-EXPL2UeQ2cHHGV_92eicXdQYTqfuw&s'},
  {name:'Rolling Stones',
  source:'https://cdn1.faroutmagazine.co.uk/uploads/1/2021/03/Rolling-Stones-logo.jpg'},
  {name:'Mr. Proper',
  source:'https://upload.wikimedia.org/wikipedia/en/7/73/Mr._Clean_logo.png'},
  {name:'Pringles',
  source:'https://www.pngmart.com/files/22/Pringles-Logo-PNG-Clipart.png'},
  {name:'DuoLingo',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQlJhNdj8o4oRYA62SgSGH2cKr8GDKARf9g&s'},
  {name:'Bic',
  source:'https://media.licdn.com/dms/image/v2/D4E0BAQFUGZK0lh67qg/company-logo_200_200/company-logo_200_200/0/1696436759062/bic_logo?e=2147483647&v=beta&t=ZyObs8a8BqyugOE5_VRL5K3HyH1DdOA8rF838iAdrb8'},
  {name:'Geico',
  source:'https://i.pinimg.com/736x/18/91/0b/18910b3981503ab3227e8faf6b3ad56b.jpg'},
  {name:'Linux',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx6camOf_G96Zcs2Zj34Yjmy0ysPd-p0oJQ&s'},
  {name:'Big Boy',
  source:'https://m.media-amazon.com/images/I/71p6Ui3RK1L._AC_UF894,1000_QL80_.jpg'},
  {name:'Coca-Cola',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDwFQCaXErzeT56WzxaWbAJUB7-EQase3jA&s'},
  {name:'Rolex',
  source:'https://www.icon-icon.com/wp-content/uploads/2021/05/logos_325_970757.png'},
  {name:'Alfa Romeo',
  source:'https://p7.hiclipart.com/preview/919/919/662/alfa-romeo-romeo-car-alfa-romeo-giulietta-alfa-romeo-4c-alfa-romeo.jpg'},
  {name:'Kraken Robotics',
  source:'https://s3-symbol-logo.tradingview.com/kraken-robotics--600.png'},
  {name:'Volatus Aerospace',
  source:'https://simplywall.st/cdn-cgi/image/format=auto,fit=cover,q=80,blur=0,metadata=none/https://images.simplywall.st/asset/logos/volatusaerospace.com?size=48'},
  {name:'Dropbox',
  source:'https://img.icons8.com/color/1200/dropbox.jpg'},
  {name:'Porsche',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumZO51aZ16PECJyaDVfC33pu7uG3FaXkpc6ThvJIlTA&s'},
  {name:'MGM Grand',
  source:'https://i.pinimg.com/474x/f1/b6/4d/f1b64dc99ec7f1bee7ed75f358fdc475.jpg'},
  {name:'Quaker',
  source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--3zGXksQ-VmfttO1NArUmQcoIXvCVUO1fg&s'},
  {name:'Arm and Hammer',
  source:'https://f4.bcbits.com/img/a2538004787_16.jpg'},
  {name:'Doge Coin',
  source:'https://cdn.siasat.com/wp-content/uploads/2023/04/dogecoin.jpg'},
    
];

const logoMax=logos.length-1;
const logoTile=getMe('feature');
const tiles=document.querySelectorAll('.logo-container:not([draggable])');
const pickUp= new Audio('pickup.mp3');
const incorrect= new Audio('incorrect.mp3');
const correct = new Audio('correct.mp3');
const history= [];
let transition= true;
let gameOver=false;


// *** Global Functions *** 
function getMe(id){return document.getElementById(id);}

function getTiles(){
    let duplicate=true;
    const options=[];     // records possible answers
    // containerNo =position of correct answer in options array 
    const containerNo=Math.floor(Math.random() * (tiles.length)); 
    for(let i=0;i<tiles.length;i++){
        let pick;
        do{
            pick=Math.floor(Math.random() * logoMax);    // pick index# from 0 to logo[] length-1 
            duplicate= (pick==logoIndex) ?true :false;   // pick can not equal the logo already picked
    }while(options.includes(pick) || duplicate);   // keep picking while pick is already picked or pick==logo
    tiles[i].innerHTML=logos[pick].name;  // dump the option picked to container HTML
    tiles[i].dataset.logoIndexValue=pick; // set attribute for container
    options.push(pick);  // record the pick
    }
    // assign correct answer to one of the containers HTML and attribute
    tiles[containerNo].innerHTML=logos[logoIndex].name;  
    tiles[containerNo].dataset.logoIndexValue=logoIndex;
}

function getLogo(ind){
    if(ind) {logoIndex=ind;}
    else {
        do{
            logoIndex=Math.floor(Math.random() * logoMax); // pick a logo
            if(history.includes(logoIndex)){
                console.log('phew... That was close, almost repeated logos');
            }
            else{
                console.log('found unique logo');
            }

        }while(history.includes(logoIndex));
    }  
    history.push(logoIndex);
    getMe('feature').src=logos[logoIndex].source;   // display logo centre square
}

// drag listener for center square
logoTile.addEventListener('dragend', (event) =>{event.target.style.opacity='1';});
logoTile.addEventListener('dragstart', (event) =>{
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity='0.5';
    pickUp.play();
});

logoTile.addEventListener('transitionend',(event)=>{
    event.target.classList.remove('resizeSmall');
    if(transition){
      getLogo();
      getTiles();
      transition=false;
    }
});

// dragover listeners for all containers except centre square
tiles.forEach((drop,ind)=> {
    drop.addEventListener('dragover', event=> event.preventDefault());
});

// drop listeners for all containers except centre square
tiles.forEach(logo =>{
    logo.addEventListener('drop', (event)=>{
        event.preventDefault();
        // const dragTile= document.getElementById(event.dataTransfer.getData('text/plain')); //  returns element id of drag item
        // if logo matches choice, CORRECT
        if(Number(logoIndex)==Number(logo.dataset.logoIndexValue)){
            const logoImg=document.createElement('img');
            logoImg.src=logos[logoIndex].source;
            logo.innerHTML='';
            logo.appendChild(logoImg);
            gameOver= history.length==logos.length? true: false;
            console.log(`Puzzles complete: ${history.length}, Game Over: ${gameOver}`);
            correct.play();
            transition=true;
            logoTile.classList.add("resizeSmall"); // triggers logoTile transition

        }
        else{ incorrect.play(); } // logo does not match choice
    });
});

getLogo();  // use getLogo(logoMax) for last logo 
getTiles();
console.log(logoMax);


// Try not to repeat Logos

// remove eventListeners after Correct Logo drop, reinstate after transition into new Logo

// sound duration = 0.5

// reverse format- logos out, name in

// transition logoTile with revolving door 