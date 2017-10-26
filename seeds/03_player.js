exports.seed = function(knex, Promise) {
  var bcrypt = require('bcrypt')
	var saltRounds = 8
	var hash1 = bcrypt.hashSync('password', saltRounds)
  return knex.raw('DELETE FROM "player"; ALTER SEQUENCE player_id_seq RESTART WITH 12;')
    .then(() => {
      let players = [{
        id: 1,
        team_id: 1,
        name: 'Tyler Keesling',
        phone: '6107425253',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Pitcher',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(2).png'
      }, {
        id: 2,
        team_id: 1,
        name: 'Rob Olson',
        phone: '8155206182',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Second Base',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(3).png'
      }, {
        id: 3,
        team_id: 1,
        name: 'Michelle Olson',
        phone: '4254448825',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Right Field',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(4).png'
      }, {
        id: 4,
        team_id: 1,
        name: 'Ty Blake',
        phone: '5557425253',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Shortstop',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(5).png'
      }, {
        id: 5,
        team_id: 1,
        name: 'Amanda Cusic',
        phone: '5558145111',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Left Field',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(6).png'
      }, {
        id: 6,
        team_id: 1,
        name: 'Robert Cusic',
        phone: '5558246969',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Left Center',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(7).png'
      }, {
        id: 7,
        team_id: 1,
        name: 'Cale Wharry',
        phone: '3032498575',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Right Center',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/11234808_10207419533544393_8319026028767802000_o.jpg'
      }, {
        id: 8,
        team_id: 1,
        name: 'Jeff Scanlan',
        phone: '5558914511',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Third Base',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(8).png'
      }, {
        id: 9,
        team_id: 1,
        name: 'Kari Koelbel',
        phone: '5557204567',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'Catcher',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/10632761_10150710595904953_454935543367963912_n.jpg'
      }, {
        id: 10,
        team_id: 1,
        name: 'Rob Lawrence',
        phone: '7198223520',
        email: 'tyler.keesling@gmail.com',
        password: hash1 ,
        position: 'First Base',
        bio: 'Bacon ipsum dolor amet kielbasa drumstick salami sausage, picanha flank cupim pork chop biltong. Hamburger andouille leberkas short ribs turkey ball tip cow pork loin kielbasa porchetta drumstick swine.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(10).png'
      }, {
        id: 11,
        team_id: 1,
        name: 'Nick Dahl',
        phone: '3035026452',
        email: 'nicholas.b.dahl@gmail.com',
        password: hash1 ,
        position: '3rd Base',
        bio: 'Line drives to the face and throwing to first base give me mild anxiety.',
        photo: 'https://s3-us-west-2.amazonaws.com/sluggersimagebucket/canva-photo-editor+(11).png'
      }]
      return knex('player').insert(players)
    })
};
