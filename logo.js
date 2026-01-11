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

const baseball=[
    {name:'Boston',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/RedSoxPrimary_HangingSocks.svg/1200px-RedSoxPrimary_HangingSocks.svg.png'},
    {name:'Arizona',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/109.svg'},
    {name:'Oakland',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/133.svg'},
    {name:'Atlanta',
    source:'https://www.vhv.rs/dpng/d/470-4705537_atlanta-braves-logo-vector-free-hd-png-download.png'},
    {name:'Baltimore',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/110.svg'},
    {name:'Chicago',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/112.svg'},
    {name:'Chicago',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/145.svg'},
    {name:'Cincinnati',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cincinnati_Reds_Logo.svg/250px-Cincinnati_Reds_Logo.svg.png'},
    {name:'Cleveland',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Guardians_winged_%22G%22.svg/1280px-Guardians_winged_%22G%22.svg.png'},
    {name:'Colorado',
    source:'https://content.sportslogos.net/logos/54/58/full/8198_colorado_rockies-cap-2013.png'},
    {name:'Detroit',
    source:'https://content.sportslogos.net/logos/53/59/full/detroit_tigers_logo_primary_19941509.png'},
    {name:'Houston',
    source:'https://a.espncdn.com/i/teamlogos/mlb/500/hou.png'},
    {name:'Kansas',
    source:'https://upload.wikimedia.org/wikipedia/commons/7/78/Kansas_City_Royals_Primary_Logo.svg'},
    {name:'Los Angeles',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/108.svg'},
    {name:'Los Angeles',
    source:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Los_Angeles_Dodgers_Logo.svg'},
    {name:'Miami',
    source:'https://content.sportslogos.net/logos/54/3637/full/miami_marlins_logo_alternate_2019_sportslogosnet-7649.png'},
    {name:'Milwaukee',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/158.svg'},
    {name:'Minnesota',
    source:'https://images.seeklogo.com/logo-png/48/2/minnesota-twins-logo-png_seeklogo-483364.png'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/New_York_Mets.svg/1200px-New_York_Mets.svg.png'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/1085px-New_York_Yankees_Primary_Logo.svg.png'},
    {name:'Philadelphia',
    source:'https://upload.wikimedia.org/wikipedia/en/f/f0/Philadelphia_Phillies_%282019%29_logo.svg'},
    {name:'Pittsburg',
    source:'https://platform.bucsdugout.com/wp-content/uploads/sites/49/chorus/uploads/chorus_asset/file/20055609/Pirates_Alt_3.png?quality=90&strip=all&crop=0,0,100,100'},
    {name:'San Diego',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/135.svg'},
    {name:'San Francisco',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8CrRp3pa_7CxkDW0QQVM-Wha-nuUZOEnlg&s'},
    {name:'Seattle',
    source:'https://images.seeklogo.com/logo-png/33/2/seattle-mariners-logo-png_seeklogo-330648.png'},
    {name:'Saint Louis',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/St._Louis_Cardinals_logo.svg/1280px-St._Louis_Cardinals_logo.svg.png'},
    {name:'Tampa Bay',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tampa-Bay-Rays-Logo-2008-2018-700x394.png/250px-Tampa-Bay-Rays-Logo-2008-2018-700x394.png'},
    {name:'Texas',
    source:'https://images.seeklogo.com/logo-png/62/2/texas-rangers-logo-png_seeklogo-628540.png'},
    {name:'Toronto',
    source:'https://www.mlbstatic.com/team-logos/team-cap-on-light/141.svg'},
    {name:'Washington',
    source:'https://sportslogohistory.com/wp-content/uploads/2018/04/washington_nationals_2011-pres_w.png'},
    {name:'Montreal',
    source:'https://images.squarespace-cdn.com/content/v1/5984890903596eaddbfc4532/1505425320032-DSQBV6I4LG1O9X3ZWQT1/EXPOS_LOGO.png'},
];

const hockey=[
   {name:'Anaheim',
    source:'https://content.sportslogos.net/logos/1/1736/thumbs/173614882025.gif'},
    {name:'Boston',
    source:'https://content.sportslogos.net/logos/1/3/thumbs/boston-bruins-logo-primary-2026-367442026-thumb.png'},
    {name:'Buffalo',
    source:'https://content.sportslogos.net/logos/1/4/thumbs/454932021.gif'},
    {name:'Calgary',
    source:'https://content.sportslogos.net/logos/1/5/thumbs/548202021.gif'},
    {name:'Carolina',
    source:'https://content.sportslogos.net/logos/1/6/thumbs/fotih31tn5r345nufo5xxayh3.gif'},
    {name:'Chicago',
    source:'https://content.sportslogos.net/logos/1/7/thumbs/chicago-blackhawks-logo-primary-2000-1288-thumb.png'},
    {name:'Colorado',
    source:'https://content.sportslogos.net/logos/1/8/thumbs/colorado-avalanche-logo-primary-2000-9420-thumb.png'},
    {name:'Columbus',
    source:'https://content.sportslogos.net/logos/1/9/thumbs/jhepegs329pc7ugyypebl28wg.gif'},
    {name:'Dallas',
    source:'https://content.sportslogos.net/logos/1/10/thumbs/1043322022.gif'},
    {name:'Detroit',
    source:'https://content.sportslogos.net/logos/1/11/thumbs/yo3wysbjtagzmwj37tb11u0fh.gif'},
    {name:'Edmonton',
    source:'https://content.sportslogos.net/logos/1/12/thumbs/1229852023.gif'},
    {name:'Florida',
    source:'https://content.sportslogos.net/logos/1/13/full/florida_panthers_logo_primary_19942293.png'},
    {name:'Los Angeles',
    source:'https://content.sportslogos.net/logos/1/14/thumbs/1478602025.gif'},
    {name:'Minnesota',
    source:'https://content.sportslogos.net/logos/1/15/thumbs/1588102014.gif'},
    {name:'Montreal',
    source:'https://content.sportslogos.net/logos/1/16/thumbs/124.gif'},
    {name:'Nashville',
    source:'https://content.sportslogos.net/logos/1/17/thumbs/lvchw3qfsun2e7oc02kh2zxb6.gif'},
    {name:'New Jersey',
    source:'https://content.sportslogos.net/logos/1/18/thumbs/32tfs723a3bes0p0hb4hgcy1u.gif'},
    {name:'New York',
    source:'https://content.sportslogos.net/logos/1/19/thumbs/1939112018.gif'},
    {name:'New York',
    source:'https://content.sportslogos.net/logos/1/20/thumbs/144.gif'},
    {name:'Ottawa',
    source:'https://content.sportslogos.net/logos/1/21/thumbs/2111292021.gif'},
    {name:'Philadelphia',
    source:'https://content.sportslogos.net/logos/1/22/thumbs/2231452024.gif'},
    {name:'Pittsburg',
    source:'https://content.sportslogos.net/logos/1/24/thumbs/pittsburgh-penguins-logo-primary-2017-7099-thumb.png'},
    {name:'San Jose',
    source:'https://content.sportslogos.net/logos/1/26/thumbs/dmo1xf3z4pph27vmg3gf.gif'},
    {name:'Seattle',
    source:'https://content.sportslogos.net/logos/1/6740/thumbs/674079522022.gif'},
    {name:'St. Louis',
    source:'https://content.sportslogos.net/logos/1/25/thumbs/st-louis-blues-logo-primary-2026-2533842026-thumb.png'},
    {name:'Tampa Bay',
    source:'https://content.sportslogos.net/logos/1/27/thumbs/97hhvk8e5if0riesnex30etgz.gif'},
    {name:'Toronto',
    source:'https://content.sportslogos.net/logos/1/28/thumbs/2887612017.gif'},
    {name:'Utah',
    source:'https://content.sportslogos.net/logos/1/6944/thumbs/utah-mammoth-logo-primary-2026-694433562026-thumb.png'},
    {name:'Vancouver',
    source:'https://content.sportslogos.net/logos/1/29/thumbs/2920842020.gif'},
    {name:'Vegas',
    source:'https://content.sportslogos.net/logos/1/6114/thumbs/611426842018.gif'},
    {name:'Washington',
    source:'https://content.sportslogos.net/logos/1/30/full/215.png'},
    {name:'Winnipeg',
    source:'https://content.sportslogos.net/logos/1/3050/thumbs/z9qyy9xqoxfjn0njxgzoy2rwk.gif'},
];

const football=[
    {name:'Arizona',
    source:'https://static.www.nfl.com/image/private/f_auto/league/u9fltoslqdsyao8cpm0k'},
    {name:'Baltimore',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd'},
    {name:'Atlanta',
    source:'https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op'},
    {name:'Buffalo',
    source:'https://static.www.nfl.com/image/private/f_auto/league/giphcy6ie9mxbnldntsf'},
    {name:'Carolina',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq'},
    {name:'Cincinnati',
    source:'https://static.www.nfl.com/image/private/f_auto/league/okxpteoliyayufypqalq'},
    {name:'Chicago',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ijrplti0kmzsyoaikhv1'},
    {name:'Cleveland',
    source:'https://static.www.nfl.com/image/upload/f_auto/league/bedyixmmjhszfcx5wv2l'},
    {name:'Dallas',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzo0tnf6'},
    {name:'Denver',
    source:'https://static.www.nfl.com/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx'},
    {name:'Detroit',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr'},
    {name:'Houston',
    source:'https://static.www.nfl.com/image/upload/f_auto/league/u6camnphqvjc6mku6u3c'},
    {name:'Green Bay',
    source:'https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x'},
    {name:'Indianapolis',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ketwqeuschqzjsllbid5'},
    {name:'Los Angeles',
    source:'https://i.pinimg.com/236x/d7/fc/d8/d7fcd879167ba9c5ee8e7afdfd2ec464.jpg'},
    {name:'Jacksonville',
    source:'https://static.www.nfl.com/image/private/f_auto/league/qycbib6ivrm9dqaexryk'},
    {name:'Minnesota',
    source:'https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz'},
    {name:'Kansas City',
    source:'https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs'},
    {name:'New Orleans',
    source:'https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx'},
    {name:'Las Vegas',
    source:'https://static.www.nfl.com/image/private/f_auto/league/gzcojbzcyjgubgyb6xf2'},
    {name:'New York',
    source:'https://1000logos.net/wp-content/uploads/2017/05/New-York-Giants-Helmet-1981.png'},
    {name:'Los Angeles',
    source:'https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4'},
    {name:'Philadelphia',
    source:'https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq'},
    {name:'Miami',
    source:'https://static.www.nfl.com/image/private/f_auto/league/lits6p8ycthy9to70bnt'},
    {name:'San Francisco',
    source:'https://static.www.nfl.com/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn'},
    {name:'New England',
    source:'https://static.www.nfl.com/image/private/f_auto/league/moyfxx3dq5pio4aiftnc'},
    {name:'Seattle',
    source:'https://static.www.nfl.com/image/private/f_auto/league/gcytzwpjdzbpwnwxincg'},
    {name:'New York',
    source:'https://images.seeklogo.com/logo-png/61/2/new-york-jets-2024-logo-png_seeklogo-614976.png'},
    {name:'Tampa Bay',
    source:'https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih'},
    {name:'Pittsburgh',
    source:'https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx'},
    {name:'Washington',
    source:'https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd'},
    {name:'Tennessee',
    source:'https://static.www.nfl.com/image/private/f_auto/league/pln44vuzugjgipyidsre'},
    
];

const basketball=[
    {name:'Atlanta',
    source:'https://toppng.com/uploads/preview/atlanta-hawks-logo-vector-11573947003inxlg1axrj.png'},
    {name:'Boston',
    source:'https://i.pinimg.com/736x/1a/b7/09/1ab709135b86e0cae984e69cfa8db4dd.jpg'},
    {name:'Brooklyn',
    source:'https://newsfeed.time.com/wp-content/uploads/sites/9/2012/05/nets.jpg?w=600'},
    {name:'Charlotte',
    source:'https://images.seeklogo.com/logo-png/24/2/charlotte-hornets-logo-png_seeklogo-249854.png'},
    {name:'Chicago',
    source:'https://a.espncdn.com/i/teamlogos/nba/500/chi.png'},
    {name:'Cleveland',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SWaj3oC6iel9N_Cd4CJgOcFfuSmPsHqHzQ&s'},
    {name:'Dallas',
    source:'https://content.sportslogos.net/logos/6/228/full/436.png'},
    {name:'Denver',
    source:'https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg'},
    {name:'Detroit',
    source:'https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_jersey_2000_sportslogosnet-6846.png'},
    {name:'Golden State',
    source:'https://content.sportslogos.net/logos/6/235/full/4782_golden_state_warriors-alternate-2020.png'},
    {name:'Houston',
    source:'https://content.sportslogos.net/logos/6/230/full/vr7yd7ghightk5f9g3jh5ltnc.png'},
    {name:'Indiana',
    source:'https://content.sportslogos.net/logos/6/224/thumbs/indiana-pacers-logo-primary-2006-7365-thumb.png'},
    {name:'Los Angeles',
    source:'https://images.seeklogo.com/logo-png/44/2/los-angeles-clippers-logo-png_seeklogo-445270.png'},
    {name:'Memphis',
    source:'https://content.sportslogos.net/logos/6/231/full/795.png'},
    {name:'Miami',
    source:'https://content.sportslogos.net/logos/6/214/full/93lzfcfcnq125eh7etyxpuhfp.gif'},
    {name:'Milwaukee',
    source:'https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_alternate_20169034.png'},
    {name:'Minnesota',
    source:'https://content.sportslogos.net/logos/6/232/full/6093_minnesota_timberwolves-alternate-2018.png'},
    {name:'New Orleans',
    source:'https://images.seeklogo.com/logo-png/50/2/new-orleans-pelicans-logo-png_seeklogo-502091.png'},
    {name:'New York',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlR79Y7kG9_dxFqJT2nFYjgoIj94CE8q0nw&s'},
    {name:'Oklahoma City',
    source:'https://logos-world.net/wp-content/uploads/2020/05/Oklahoma-City-Thunder-logo.png'},
    {name:'Orlando',
    source:'https://toppng.com/uploads/preview/orlando-magic-logo-transparent-11563613412czsw8bbvg0.png'},
    {name:'Philadelphia',
    source:'https://content.sportslogos.net/logos/6/218/full/b63l7nnxd3bl0cxemi3qahbbp.gif'},
    {name:'Phoenix',
    source:'https://content.sportslogos.net/logos/6/238/full/807_phoenix-suns-wordmark-1993.gif'},
    {name:'Portland',
    source:'https://content.sportslogos.net/logos/6/239/full/5767.gif'},
    {name:'Sacramento',
    source:'https://cdn.nba.com/teams/legacy/www.nba.com/kings/sites/kings/files/14_-_sacramento.png'},
    {name:'San Antonio',
    source:'https://content.sportslogos.net/logos/6/233/full/828.gif'},
    {name:'Toronto',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSQfREFtMsxNhampuKi2rDnjDCnNp7FZ-HkiHUONAPA&s'},
    {name:'Utah',
    source:'https://images.seeklogo.com/logo-png/22/1/utah-jazz-logo-png_seeklogo-227716.png'},
    {name:'Washington',
    source:'https://content.sportslogos.net/logos/6/219/full/852.png'},
];

const landmarks=[
    {name:'Rio de Janeiro',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/250px-Christ_the_Redeemer_-_Cristo_Redentor.jpg'},
    {name:'Rome',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/330px-Colosseo_2020.jpg'},
    {name:'Brussels',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_Atomium_during_civil_twilight_%28DSCF1135%29.jpg/500px-The_Atomium_during_civil_twilight_%28DSCF1135%29.jpg'},
    {name:'Toronto',
    source:'https://www.summerfunguide.ca/images_logos/CN_tower.jpg'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/One_World_Trade_Center_Building.jpg/500px-One_World_Trade_Center_Building.jpg'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nancy_Reagan_waves_while_visiting_the_Statue_of_Liberty_in_New_York_City.jpg/500px-Nancy_Reagan_waves_while_visiting_the_Statue_of_Liberty_in_New_York_City.jpg'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Empire_State_Building_in_Rainbow_Colors_for_Gay_Pride_2015_%2819076876770%29.jpg/960px-Empire_State_Building_in_Rainbow_Colors_for_Gay_Pride_2015_%2819076876770%29.jpg'},
    {name:'Washington',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Washington_Monument_2022.jpg/500px-Washington_Monument_2022.jpg'},
    {name:'Washington',
    source:'https://images.immediate.co.uk/production/volatile/sites/7/2019/11/WhiteHouseGettyImages-CA24764-b45317a-e1761583763676.jpg'},
    {name:'San Francisco',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/960px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg'},
    {name:'Chicago',
    source:'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2024/04/01082724/the-bean-matte-2-1024x725.jpg'},
    {name:'Chicago',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sears_Tower%2C_Wacker_Drive_and_Jackson_Boulevard%2C_Chicago%2C_IL_-_54189600901.jpg/500px-Sears_Tower%2C_Wacker_Drive_and_Jackson_Boulevard%2C_Chicago%2C_IL_-_54189600901.jpg'},
    {name:'St. Louis',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/St_Louis_Gateway_Arch.jpg/960px-St_Louis_Gateway_Arch.jpg'},
    {name:'Orlando',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_%282024%29.jpg/500px-Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_%282024%29.jpg'},
    {name:'Wyoming',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Devils_Tower_CROP.jpg/960px-Devils_Tower_CROP.jpg'},
    {name:'South Dakota',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Mount_Rushmore_Closeup_2017.jpg/960px-Mount_Rushmore_Closeup_2017.jpg'},
    {name:'Las Vegas',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpPOcCZkEofGUppu4KrTjQGlKpYPw3w0w2Q&s'},
    {name:'Pisa',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/500px-The_Leaning_Tower_of_Pisa_SB.jpeg'},
    {name:'Paris',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/500px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg'},
    {name:'London',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/500px-Elizabeth_Tower%2C_June_2022.jpg'},
    {name:'London',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG'},
    {name:'Tokyo',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tokyo_Tower_at_night_9.JPG/500px-Tokyo_Tower_at_night_9.JPG'},
    {name:'Copenhagen',
    source:'https://mermaidsofearth.com/wp-content/uploads/News-Oresund-Johan-Wessman2L-683x1024.jpg'},
    {name:'Moscow',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/030524-StBasil%27sCathedral-Moscow-IMG_9813-2.jpg/960px-030524-StBasil%27sCathedral-Moscow-IMG_9813-2.jpg'},
    {name:'Paris',
    source:'https://www.parisperfect.com/blog/wp-content/uploads/2012/10/Visiting-the-Arc-de-Triomphe-in-Paris-by-Paris-Perfect1.jpg'},
    {name:'Pyongyang',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Arch_of_Triumph_%28Pyongyang%29_05.JPG/960px-Arch_of_Triumph_%28Pyongyang%29_05.JPG'},
    {name:'Sydney',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sydney_Opera_House_%2830111403413%29.jpg/960px-Sydney_Opera_House_%2830111403413%29.jpg'},
    {name:'Cairo',
    source:'https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg'},
    {name:'London',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tower_Bridge_London_uk.jpg/960px-Tower_Bridge_London_uk.jpg'},
    {name:'Uluru',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/960px-ULURU.jpg'},
    {name:'Agra',
    source:'https://img.flytrippers.com/wp-content/uploads/2025/02/20161235/Andrew-July-10-Taj-Mahal-visit_02-scaled-e1740085952958-467x575.jpg'},
    {name:'Forbidden City',
    source:'https://static.wikia.nocookie.net/ultimatepopculture/images/a/a7/Forbidden_City_Beijing_Shenwumen_Gate.JPG/revision/latest?cb=20200604031228'},
    {name:'Washington',
    source:'https://washington.org/sites/default/files/2024-04/CapitolBuilding_001_7406847_20230306%20%281%29.jpg'},
    {name:'Dubai',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/500px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg'},
    {name:'Athens',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/960px-The_Parthenon_in_Athens.jpg'},
    {name:'Paris',
    source:'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Louvre_Museum_%2827128035747%29.jpg/960px-Louvre_Museum_%2827128035747%29.jpg'},
    {name:'Machu Picchu',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/960px-Machu_Picchu%2C_2023_%28012%29.jpg'},
    {name:'Dubai',
    source:'https://wheelchairtravel.org/content/images/wp-content/uploads/2016/10/25-tallest-burj-khalifa.jpg'},
    {name:'Niagara Falls',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQL3skE7aEQEZD8tmvUrApONMyT5nKlPCfw&s'},
    {name:'Kuala Lumpur',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Petronas_Twin_Towers%2C_Kuala_Lumpur.jpg/500px-Petronas_Twin_Towers%2C_Kuala_Lumpur.jpg'},
    {name:'Seattle',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/SpaceNeedleTopClose.jpg/960px-SpaceNeedleTopClose.jpg'},
    {name:'London',
    source:'https://www.re-thinkingthefuture.com/wp-content/uploads/2024/01/5.-The-Gherkin-London-cover_900_584.jpg?w=999'},
    {name:'Moai',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moai_Rano_raraku.jpg/500px-Moai_Rano_raraku.jpg'},
    {name:'Berlin',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/960px-Brandenburger_Tor_abends.jpg'},
    {name:'Chichen Itza',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Piramide_Chichen-Itza_-_panoramio_%282%29.jpg/960px-Piramide_Chichen-Itza_-_panoramio_%282%29.jpg'},
    {name:'Angkor Wat',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscC2JMLilmIipx-95T9p0KxTzlgjiRuPcrQ&s'},
    {name:'Petra',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/500px-Treasury_petra_crop.jpeg'},
    {name:'Istanbul',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg'},
    {name:'Florence',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ponte_Vecchio_from_Ponte_alle_Grazie.jpg/960px-Ponte_Vecchio_from_Ponte_alle_Grazie.jpg'},
    {name:'Shanghai',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oriental_Pearl_Tower_in_Shanghai.jpg/500px-Oriental_Pearl_Tower_in_Shanghai.jpg'},
    {name:'Mecca',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/The_Kabah_in_the_Grand_Mosque_of_Makkah%2C_Saudi_Arabia_%2852501405646%29.jpg/960px-The_Kabah_in_the_Grand_Mosque_of_Makkah%2C_Saudi_Arabia_%2852501405646%29.jpg'},
    {name:'Sydney',
    source:'https://images.squarespace-cdn.com/content/v1/55cb4361e4b08dc9aca88339/1446719036707-P0DDK554G4WOCLENXLH4/image-asset.jpeg'},
    {name:'Paris',
    source:'https://media.newyorker.com/photos/61e86e4ff4a035bc37bd3d48/master/pass/DeMonchaux-PompidouCenter.jpg'},
    {name:'Vatican City',
    source:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e7/09/f7.jpg'},
    {name:'Shanghai',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Shanghai_World_Financial_Center_%28Top%29.jpg/500px-Shanghai_World_Financial_Center_%28Top%29.jpg'},
    {name:'Paris',
    source:'https://media.cnn.com/api/v1/images/stellar/prod/220502162506-01-moulin-rouge-airbnb.jpg?c=original'},
    {name:'Helsinki',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Helsinki_July_2013-27a.jpg/960px-Helsinki_July_2013-27a.jpg'},
    {name:'Prague',
    source:'https://cdn-imgix.headout.com/media/images/33b1833b42e8af419d4a0d8897eb2c48-This%20is%20a%20Photograph%20of%20St.%20Vitus%20Cathedral.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&ar=14%3A9&crop=faces&fit=crop'},
    {name:'New York',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NYC_-_Guggenheim_Museum.jpg/960px-NYC_-_Guggenheim_Museum.jpg'},
    {name:'Bilbao',
    source:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bilbao-Guggenheim-11_378.jpg/960px-Bilbao-Guggenheim-11_378.jpg'},
    {name:'Bilbao',
    source:'https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite1323/usr/images/news/images/94/puppy_de_jeff_koons_-2-_-_2021_-_bilbao-_espan-a.jpg'},
    {name:'Hollywood',
    source:'https://yt3.googleusercontent.com/knRZ_v-ZjwjuNu9vCAnYXHk9I_Bu2YAFNZ4xLnhRXvQ6aJWs1zlu6zuj05pRBhF1Lv9LmijjTg=s900-c-k-c0x00ffffff-no-rj'},
    {name:'Bratislava',
    source:'https://www.kathmanduandbeyond.com/wp-content/uploads/2015/05/Most-SNP-UFO-Bridge-Bratislava-Slovakia-APR25-15.jpg'},
    {name:'Singapore',
    source:'https://jamiechancetravels.com/wp-content/uploads/2022/09/DSCF0435.jpg'},
    {name:'Da Nang',
    source:'https://api.breakbag.com/storage/files/mceclip19-1nrwnzef2l4n709u-1752738945278.webp'},
    {name:'Baku',
    source:'https://media.gettyimages.com/id/2157797983/video/aerial-view-of-azerbaijan-skyscrappers-azerbaijan-building-of-the-crescent-baku-hotel-is-in.jpg?s=640x640&k=20&c=Dgo--9I11097471Q2JLx-G7pV9KBRVHhH_GaUrcAci8='},
    {name:'Astana',
    source:'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=285,height=160/tour_img/64903880883d9.jpeg'},
    {name:'Dubai',
    source:'https://united-arabic-emirates-infos.com/wp-content/grand-media/image/World-or-The-World-Islands-i.jpg'},
    {name:'Reykjavík',
    source:'https://allthingsiceland.com/wp-content/uploads/2024/02/hallgrimskirkja-church-t-night.jpg'},
    {name:'Mexico',
    source:'https://i.ytimg.com/vi/6tv9c_OCej0/maxresdefault.jpg'},
    {name:'Havana',
    source:'https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/havana.jpg'},

];

// const logos=[
//   {name:'MasterCard',
//    source:'https://s3-symbol-logo.tradingview.com/mastercard--big.svg'},
//   {name:'Amazon',
//    source:'https://s3-symbol-logo.tradingview.com/amazon--big.svg'},
//   {name:'Shopify',
//   source:'https://s3-symbol-logo.tradingview.com/shopify--big.svg'},
//   {name:'Google',
//   source:'https://s3-symbol-logo.tradingview.com/alphabet--big.svg'},
//   {name:'MicroSoft',
//    source:'https://s3-symbol-logo.tradingview.com/microsoft--big.svg'},
//   {name:'Nvidia',
//    source:'https://s3-symbol-logo.tradingview.com/nvidia--big.svg'},
//   {name:'Apple',
//   source:'https://s3-symbol-logo.tradingview.com/apple--big.svg'},
//   {name:'Netflix',
//    source:'https://s3-symbol-logo.tradingview.com/netflix--big.svg'},
//   {name:'Tesla',
//   source:'https://s3-symbol-logo.tradingview.com/tesla--big.svg'},
//   {name:'Meta',
//   source:'https://s3-symbol-logo.tradingview.com/meta-platforms--big.svg'},
//   {name:'Pittsburg',
//    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_1hd20Qw9mNfWOmhjGZj8jVIEsU0QQyvzw&s'}  
// ];

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
    {name:'Aphex Twin',
    source:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDngpnffHkY0VT1HLgu8kdAqnHL2HELqJag&s'},
    
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
    const containerNo=Math.floor(Math.random() * (tiles.length));  // choose a tile for the answer
    for(let i=0; i<tiles.length; i++){
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
            else{ console.log('found unique logo'); }

        }while(history.includes(logoIndex)  && history.length != logos.length);
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

logoTile.style.background='#eee';  // not fully tested with all Logos
getLogo(logoMax);  // use getLogo(logoMax) for last logo 
getTiles();
console.log(logoMax);


// remove eventListeners after Correct Logo drop, reinstate after transition into new Logo

// sound duration = 0.5

// reverse format- logos outside, name inside

// transition logoTile with revolving door - variety of transitions

// should you make target tile turn white after drop - if so... reset color again upon new tile

// Snapchat drags funny

// Sport team names repeat if name is reduced to city only (without team name) ex. New York Mets and Yankees

// remove sport teams from logos list

// rename logos to business EVENTUALLY

// replace as many sport team INITIALS as possible - try Wikipedia :)