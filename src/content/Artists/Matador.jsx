import React from 'react';

export default {
  id: 'matador',
  city: 'US & UK',
  name: 'Matador! Soul Sounds',
  photos: {
    banner: 'assets/bands/matador/spirits-small.jpg',
    profile: 'assets/bands/matador/fullgroup.jpg'
  },
  tagline: (
    <p>Matador Soul Sounds was born from the vision of <b>Eddie Roberts</b> (The New Mastersounds) and <b>Alan Evans</b> (Soulive). Combining the dynamism of each band leader, the music they have created is brand new, hard hitting and drenched with their shared musical passions - jazz, funk & soul.</p>
  ),
  bio: (
    <div>
      <div>
        <p>MATADOR! Soul Sounds is the new main attraction for guitarist Eddie Roberts and drummer Alan Evans who both step away from their day-jobs to make Matador! their vision for a collective future.</p>
        <p>Roberts, as the band leader and guitarist of The New Mastersounds, built a worldwide brand and band from scratch and has been collecting on those funky dividends for over a decade.</p>
        <p>Evans is most widely known for his role as the drummer, producer and band leader of Soulive but has (not-so) quietly built his reputation as a top-shelf audio engineer, producer studio owner, and the go-to drummer for funk and soul.</p>
        <p>So there it was, and here it is. In 2016 Eddie called on Evans to sit in on a few gigs, and from the first blue note of rehearsal number one, the two locked into some musical-vision that neither had felt in a long time.</p>
        <p>It was love at first listen and shortly thereafter, they began to devise a plan that quickly manifested itself (with some help from bullfighters across the world) to become Matador! Soul Sounds.</p>
        <p>A common misconception in America is that the matador is the only one that fights the bull, but in reality, bullfighting is a team effort. Each matador has six assistants: two picadores mounted on horseback, three banderilleros – who along with the matadors are collectively known as toreros "bullfighters” and a mozo de espadas “sword page”. Collectively they comprise a cuadrilla. </p>
        <p>Skillfully added to their Cuadrilla are two highly coveted banderilleros who were both chosen for their talent and grit. Chris Spies (Honey Island Swamp Band) teases and pumps the Bulls with his incredibly alluring sound on Keys, Kevin Scott (The Invisible Whip) gets heads nodding on bass as Roberts and Evans lock in respectively on guitar and drums.</p>
        <p>While the soul of these toreros is deeply embedded with tin machismo, the heart of the Matador belongs to the female gods. Here MSS enlisted the top two picadors in the land who are guaranteed to shake up the world and shake up them asses— Matador! Soul Sounds slays all bulls with the one-two punch of Adryon de León (Orgone) and Kimberly Dawson (Pimps of Joytime) on vocals.</p>
        <p>The band will make their official World Debut this September (2017) at <a href="http://www.brooklyncomesalive.com/" target="_blank">Live for Live Music's Brooklyn Comes Alive</a>. Matador! Soul Sounds will drop their debut single “Get Ready” on that same date through all streaming services in addition to a limited edition 7 inch pressing.</p>
        <p>So much more to come for this band that is MATADOR! Soul Sounds. Until we meet, OLÉ!</p>
      </div>
    </div>
  ),
  tracks: [
    {
      title: 'Get Ready',
      id: 'get-ready',
      record: 'Get Ready/Mr. Handsome (single)',
      length: '2:55',
      artist: 'Matador! Soul Sounds',
      featured: true,
      artistId: 'matador',
      cover: 'assets/bands/matador/single-cover.jpg',
      url: 'assets/bands/matador/audio/get-ready.mp3'
    }
  ],
  members: [
    {
      name: 'Eddie Roberts',
      of: 'The New Mastersounds',
      on: 'Guitar',
      photo: 'assets/bands/matador/members/eddie-roberts.jpg'
    },
    {
      name: 'Alan Evans',
      of: 'Soulive',
      on: 'Drums & Vocals',
      photo: 'assets/bands/matador/members/alan-evans.jpg'
    },
    {
      name: 'Chris Spies',
      on: 'Keys',
      photo: 'assets/bands/matador/members/chris-spies.jpg'
    },
    {
      name: 'Kevin Scott',
      on: 'Bass',
      photo: 'assets/bands/matador/members/kevin-scott.jpg'
    },
    {
      name: 'Adryon de León',
      of: 'Orgone',
      on: 'Vocals',
      photo: 'assets/bands/matador/members/adryon-de-leon.jpg'
    },
    {
      name: 'Kimberly Dawson',
      of: 'Pimps Of Joytime',
      on: 'Vocals',
      photo: 'assets/bands/matador/members/kim-dawson.jpg'
    }
  ]
};
