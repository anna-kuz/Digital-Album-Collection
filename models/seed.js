const albums = [
    {
        albumCover: 'https://www.amoeba.com/sized-images/max/500/500/uploads/albums/covers/other/SystemOfADown_Toxicity-1.jpg',
        albumName: 'Toxicity',
        bandName: 'System of a Down',
        year: 2001,
        genre: 'Heavy Metal',
        description: 'Toxicity is the second studio album by American heavy metal band System of a Down, released on September 4, 2001, through American Recordings and Columbia Records. Expanding on their 1998 eponymous debut, it incorporated more melody, harmonies, and singing than the band\'s first album. Categorized primarily as alternative metal and nu metal, Toxicity features elements of multiple genres, including folk, progressive rock, jazz, and Armenian and Greek music, including prominent use of instruments like the sitar, banjo, keyboards, and piano. It contains a wide array of political and non-political themes, such as mass incarceration, the CIA, the environment, police brutality, drug addiction, scientific reductionism, and groupies. Toxicity was recorded at Cello Studios in Hollywood, California. Over 30 songs were recorded, but the band narrowed the number of songs on the album to 14.',
        spotifyLink: 'https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh?si=IENEOJMBQh-kJEbbKWy8BA',
        isFavorited: 'Yes',
        songList: ['Prison Song', ' Needles', ' Deer Dance', ' Jet Pilot', ' X', ' Chop Suey!', ' Bounce', ' Forest', ' ATWA', ' Science', ' Shimmy', ' Toxicity', ' Psycho', ' Aerials', ' Arto']
    },
    {
        albumCover: 'https://roxydischouse.com/wp-content/uploads/2016/08/LDM04620.jpg',
        albumName: '...And Justice for All',
        bandName: 'Metallica',
        year: 1988,
        genre: 'Heavy Metal',
        description: '...And Justice for All is the fourth studio album by American heavy metal band Metallica, released on September 7, 1988, by Elektra Records. It was the first Metallica album to feature bassist Jason Newsted, following the death of their previous bassist Cliff Burton in 1986. Burton received posthumous co-writing credit on "To Live Is to Die" as Newsted followed bass lines Burton had recorded prior to his death. Metallica recorded the album with producer Flemming Rasmussen over four months in early 1988 at One on One Recording Studios in Los Angeles. It features aggressive complexity, fast tempos, and few verse-chorus structures. It contains lyrical themes of political and legal injustices, such as governmental corruption, censorship, and war.',
        spotifyLink: 'https://open.spotify.com/album/4Cn4T0onWhfJZwWVzU5a2t?si=pWe2LsfzSmqM3Hc4oFKJzg',
        isFavorited: 'Yes',
        songList: ['Blackend', ' ...And Justice for All', ' Eye of the Beholder', ' One', ' The Shortest Straw', ' Harvester of Sorrow', ' The Frayed Ends of Sanity', ' To Live Is to Die', ' Dyers Eve']
    },
    {
        albumCover: 'http://1.bp.blogspot.com/-UH3Nc2iLIvA/VbgsI31d-wI/AAAAAAAABGA/z4yg_wbO7TI/s1600/Cover.jpg',
        albumName: 'Slipknot',
        bandName: 'Slipknot',
        year: 1999,
        genre: 'Heavy Metal',
        description: 'Slipknot is the debut studio album by American heavy metal band Slipknot. It was released on June 29, 1999, by Roadrunner Records, following a demo containing a few of the songs which had previously been released in 1998. Later, it was reissued in December 1999 with a slightly-altered track listing and mastering as the result of a lawsuit. It was the first release by the band to be produced by Ross Robinson, who sought to refine Slipknot\'s sound rather than alter the group\'s musical direction. This is the only album to feature original guitarist Josh Brainard who left at the end of recording in late 1998 while the band was taking a brief break. Jim Root, who recorded two tracks at this point, would appear full time on subsequent albums. The album spans several genres, but is generally noted for its extensive percussion and overall heavy sound. It was well received by fans and critics alike and was responsible for bringing Slipknot a large increase in popularity.',
        spotifyLink: 'https://open.spotify.com/album/5lOFvOWAdy9G6p44noRILU?si=1z9H7J7wQsWBCTU4SzpQPQ',
        isFavorited: 'No',
        songList: ['742617000027', ' (sic)', ' Eyeless', ' Wait and Bleed', ' Surfacing', ' Spit It Out', ' Tattered & Torn', ' Me Inside', ' Liberate', ' Prosthetics', ' No Life', ' Diluted', ' Only One', ' Scissors', ' Eeyore']
    },
    {
        albumCover: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6198/6198529_sa.jpg;maxHeight=640;maxWidth=550',
        albumName: 'Everybody Else Is Doing It, So Why Can\'t We?',
        bandName: 'The Cranberries',
        year: 1993,
        genre: 'Alternative Rock',
        description: 'Everybody Else Is Doing It, So Why Can\'t We? is the debut studio album by Irish alternative rock band the Cranberries. Released on 1 March 1993 after four EPs, it is both the band\'s first full-length album and major label release. The album was written entirely by the band\'s lead singer Dolores O\'Riordan and guitarist Noel Hogan. It reached number one on both the UK and Irish albums charts. The album spent a total of 86 weeks on the UK chart. On 24 June 1994, it became the fifth album in rock history to reach number one more than a year after release. At the end of 1995, it ranked as the 50th best selling album in Australia. It reached number 18 on the US Billboard 200 albums chart and stayed on this chart for 130 weeks; the album sold six million copies worldwide.',
        spotifyLink: 'https://open.spotify.com/album/0AP5O47kJWlaKVnnybKvQI?si=_QU02HE1TAWpuXv1KGSyag',
        isFavorited: 'No',
        songList: ['I Still Do', ' Dreams', ' Sunday', ' Pretty', ' Waltzing Back', ' Not Sorry', ' Linger', ' Wanted', 'Still Can\'t...', 'I Will Always', 'How', 'Put Me Down']
    },
    {
        albumCover: 'https://m.media-amazon.com/images/I/81BbQMTakEL._SS500_.jpg',
        albumName: 'Around the Fur',
        bandName: 'Deftones',
        year: 1997,
        genre: 'Alternative Metal',
        description: 'Around the Fur is the second studio album by American alternative metal band Deftones, released on October 28, 1997, by Maverick Records. The songs "My Own Summer" and "Be Quiet and Drive" were released as singles with accompanying music videos. The album was certified gold by the RIAA in June 1999, and was eventually certified platinum in 2011.',
        spotifyLink: 'https://open.spotify.com/album/7o4UsmV37Sg5It2Eb7vHzu?si=80HBrNXCQ3-eJRo5fwMNfg',
        isFavorited: 'No',
        songList: ['My Own Summer (Shove It)', ' Lhabia', ' Mascara', ' Around the Fur', ' Rickets', ' Be Quiet and Drive (Far Away)', ' Lotion', ' Dai the Flu', ' Headup', ' MX']
    },
    {
        albumCover: 'https://i.pinimg.com/originals/45/a3/fb/45a3fbb4b44fd3755039bde25ce85816.png',
        albumName: 'Mutter',
        bandName: 'Rammstein',
        year: 2001,
        genre: 'Industrial Metal',
        description: 'Mutter is the third studio album by German Neue Deutsche Härte band Rammstein. It was released on 2 April 2001 through Motor and Universal Music. The album\'s cover image is a photograph of a dead fetus, which was taken by Daniel & Geo Fuchs. The album has yielded six singles which, to date, are the most released from any Rammstein album.',
        spotifyLink: 'https://open.spotify.com/album/7ikuEzL6xeAgu6yT6YVLy7?si=Vrw7dGfCSJCHv3BdIhl_vA',
        isFavorited: 'No',
        songList: ['Mein Herz brennt', ' Link 2 3 4', ' Sonne', ' Ich will', ' Feuer frei!', ' Mutter', ' Spieluhr', ' Zwitter', ' Rein raus', ' Adios', ' Nebel']
    },
    {
        albumCover: 'https://www.amoeba.com/sized-images/max/500/500/uploads/albums/covers/other/Nirvana_Bleach-2.jpg',
        albumName: 'Bleach',
        bandName: 'Nirvana',
        year: 1989,
        genre: 'Rock',
        description: 'Bleach is the debut studio album by American rock band Nirvana, released on June 15, 1989, by Sub Pop. After the release of their debut single "Love Buzz" on Sub Pop in November 1988, Nirvana rehearsed for two to three weeks in preparation for recording a full-length album. The main recording sessions for Bleach took place at Reciprocal Recording in Seattle, Washington between December 1988 and January 1989. It is the only Nirvana album released on the Sub Pop label and their only album to feature drummer Chad Channing. Bleach did not chart upon initial release, but was well received by critics. When reissued internationally by Geffen Records in 1992 following the success of Nirvana\'s second album, Nevermind, Bleach peaked at number 89 on the Billboard 200, number 33 on the UK Albums Chart, and number 34 on the Australian albums chart.',
        spotifyLink: 'https://open.spotify.com/album/1KVGLuPtrMrLlyy4Je6df7?si=R4c7ltj8QJ2kUvTdZaUGnA',
        isFavorited: 'Yes',
        songList: ['Blew', ' Floyd The Barber', ' About A Girl', ' School', ' Love Buzz', ' Paper Cuts', ' Negative Creep', ' Scoff', ' Swap Meet', ' Mr. Moustache', ' Sifting', ' Big Cheese', ' Downer']
    },
    {
        albumCover: 'http://4.bp.blogspot.com/-eML4wGa-7RU/TC06L4h3svI/AAAAAAAABhA/pl7nlIMw2SQ/s500/pearl_jam_vs.png',
        albumName: 'Vs.',
        bandName: 'Pearl Jam',
        year: 1993,
        genre: 'Alternative Rock',
        description: 'Vs. is the second studio album by American rock band Pearl Jam, released October 12, 1993, through Epic Records. After a relentless touring schedule in support of their 1991 debut album Ten, Pearl Jam headed into the studio in early 1993 facing the challenge of following up the commercial success of its debut.',
        spotifyLink: 'https://open.spotify.com/album/3BSOiAas8BpJOii3kCPyjV?si=ZAGsgO7MQVinrQLMYPI9zw',
        isFavorited: 'No',
        songList: ['Go', ' Animal', ' Daughter', ' Glorified G', ' Dissident', ' W.M.A.', ' Blood', ' Rearviewmirror', ' Rats', ' Elderly Woman Behind the Counter in a Small Town', ' Leash', ' Indifference', ' Hold On', ' Cready Stomp', ' Crazy Mary']
    },
    {
        albumCover: 'http://4.bp.blogspot.com/-8x08mCBqTFs/TbcMp7jP8kI/AAAAAAAAAL8/YtCsOggJqEk/s1600/ride-the-lightning.jpg',
        albumName: 'Ride The Lightning',
        bandName: 'Metallica',
        year: 1984,
        genre: 'Heavy Metal',
        description: 'Ride the Lightning is the second studio album by American heavy metal band Metallica, released on July 27, 1984, by the independent record label Megaforce Records. The album was recorded in three weeks with producer Flemming Rasmussen at Sweet Silence Studios in Copenhagen, Denmark. The artwork, based on a concept by the band, depicts an electric chair being struck by lightning flowing from the band logo. The title was taken from a passage in Stephen King\'s novel The Stand, in which a character uses the phrase to refer to execution by electric chair. Although rooted in the thrash metal genre, the album showcased the band\'s musical growth and lyrical sophistication. Bassist Cliff Burton introduced the basics of music theory to the band and had more input in the songwriting. Beyond the fast tempos of its debut Kill \'Em All, Metallica broadened its approach by employing acoustic guitars, extended instrumentals, and more complex harmonies.',
        spotifyLink: 'https://open.spotify.com/album/2omIeSJEGQeKHPOpiXgfkr?si=fbUXwAU-QLKFZhunN4_jBA',
        isFavorited: 'No',
        songList: ['Fight Fire With Fire', ' Ride The Lighting', ' For Whom The Bell Tolls', ' Fade to Black', ' Trapped Under Ice', ' Escape', ' Creeping Death', ' The Call Of Ktulu']
    }
]



//export seed data
module.exports = albums