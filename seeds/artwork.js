
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artwork').del()
    .then(function () {
      // Inserts seed entries
      return knex('artwork').insert([
        {name: 'NightHawks', artist: "1", url: "https://c1.staticflickr.com/3/2828/33865752910_3dff6e8737_z.jpg"},
        {name: 'PokerDogs', artist: "2", url: "https://c1.staticflickr.com/3/2869/33865752760_a90b322b29_z.jpg"},
        {name: 'FlowerCarrier', artist: "3", url: "https://c1.staticflickr.com/3/2869/34119127711_148a503724_z.jpg"},
        {name: 'WaterLillies', artist: "4", url: "https://c1.staticflickr.com/3/2810/33865752380_45484d26fc_z.jpg"},
        {name: 'PersistenceOfMemory', artist: "5", url: "https://c1.staticflickr.com/3/2872/33865602940_9a4b5c38e8_z.jpg"},
        {name: 'Wave', artist: "6", url: "https://c1.staticflickr.com/3/2847/33408094524_729db2f68c_z.jpg"},
        {name: 'StarryNight', artist: "7", url: "https://c1.staticflickr.com/5/4166/33408094504_34965cd6b9_z.jpg"},
        {name: 'CreationOfAdam', artist: "8", url: "https://c1.staticflickr.com/5/4167/33408094464_c586a28141_z.jpg"},
        {name: 'BirthOfVenus', artist: "9", url: "https://c1.staticflickr.com/3/2852/33439283133_9579f43a21_z.jpg"},
        {name: 'BlackIris', artist: "10", url: "https://c1.staticflickr.com/5/4177/34119127771_e5b348f0bd_z.jpg"},
        {name: 'Artmisia', artist: "11", url: "https://c1.staticflickr.com/5/4184/33865752870_288f21db17_z.jpg"},
        {name: 'Musicians', artist: "12", url: "https://c1.staticflickr.com/3/2888/34119127641_b346986164_z.jpg"},
        {name: 'WhistlersMother', artist: "13", url: "https://c1.staticflickr.com/5/4179/34119127511_7098ec11a7_z.jpg"},
        {name: 'Frida', artist: "14", url: "https://c1.staticflickr.com/3/2876/33865752520_75d1f08153_z.jpg"},
        {name: 'GirlWithPearlEarring', artist: "15", url: "https://c1.staticflickr.com/3/2894/34249268725_9d02dea9c6_z.jpg"},
        {name: 'Scream', artist: "16", url: "https://c1.staticflickr.com/3/2808/34118930141_2ea753cf9d_z.jpg"},
        {name: 'MonaLisa', artist: "17", url: "https://c1.staticflickr.com/3/2888/34118929981_b3b91555c9_z.jpg"},
        {name: 'SoupCan', artist: "18", url: "https://c1.staticflickr.com/3/2870/33439283403_9723a427ca_z.jpg"},
        {name: 'Gothic', artist: "19", url: "https://c1.staticflickr.com/3/2941/33439283263_7491f1fceb_z.jpg"}
      ]);
    });
};
