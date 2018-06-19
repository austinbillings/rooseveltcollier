import React from 'react';

import TrackPanel from 'ui/TrackPanel';

const Tracks = [
  {
    title: 'Taking A Break At Iron Wax: Volume 1 [110 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-1/vol-1-110bpm.mp3',
    cover: '/assets/features/taking-a-break/vol-1/vol-1.jpg',
    length: '2:48',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-1/vol-X-110bpm.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-1/vol-X-110bpm.wav' }
    ]
  },
  {
    title: 'Taking A Break At Iron Wax: Volume 2',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-2/vol-2.mp3',
    cover: '/assets/features/taking-a-break/vol-2/vol-2.jpg',
    length: '4:25',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-2/vol-2.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-2/vol-2.wav' }
    ]
  },
  {
    title: 'Taking A Break At Iron Wax: Volume 3 [97 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-3/vol-3-97bpm.mp3',
    cover: '/assets/features/taking-a-break/vol-3/vol-3.jpg',
    length: '',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-3/vol-3-97bpm.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-3/vol-3-97bpm.wav' }
    ]
  },
  {
    title: 'Taking A Break At Iron Wax: Volume 4',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-4/vol-4.mp3',
    cover: '/assets/features/taking-a-break/vol-4/vol-4.jpg',
    length: '',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-4/vol-4.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-4/vol-4.wav' }
    ]
  },
  {
    title: 'Taking A Break At Iron Wax: Volume 5',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-5/vol-5.mp3',
    cover: '/assets/features/taking-a-break/vol-5/vol-5.jpg',
    length: '',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-5/vol-5.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-5/vol-5.wav' }
    ]
  },
  {
    title: 'Taking A Break At Iron Wax: Volume 6 [96 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/vol-6/vol-6-96bpm.mp3',
    cover: '/assets/features/taking-a-break/vol-6/vol-6.jpg',
    length: '',
    download: [
      { format: 'mp3', url: '/assets/features/taking-a-break/vol-6/vol-6-96bpm.mp3' },
      { format: 'wav', url: '/assets/features/taking-a-break/vol-6/vol-6-96bpm.wav' }
    ]
  }
];

const OldTracks = [
  {
    name: 'January 23rd (93 BPM)',
    title: 'Free Funk Fridays, Vol. 1 [93 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/audio/fff-vol1.mp3',
    cover: '/assets/features/taking-a-break/fff-vol1.jpg',
    length: '3:43',
    download: [
      { format: 'aif', url: 'https://www.dropbox.com/s/hypr5qboxw0vhid/Jan%2023rd%2093bpm.aif?dl=0' },
      { format: 'mp3', url: 'https://www.dropbox.com/s/q3e2fp5ol8681my/Jan%2023rd%2093bpm.mp3?dl=0' }
    ]
  },
  {
    name: 'January 30th (101 BPM)',
    title: 'Free Funk Fridays, Vol. 2 [101 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/audio/fff-vol2.mp3',
    cover: '/assets/features/taking-a-break/fff-vol2.jpg',
    length: '3:20',
    download: [
      { format: 'aif', url: 'https://www.dropbox.com/s/l3r79hbka4muica/Jan%2030th%20101bpm.aif?dl=0' },
      { format: 'mp3', url: 'https://www.dropbox.com/s/w961ry0b27k7tfv/Jan%2030th%20101bpm.mp3?dl=0' }
    ]
  },
  {
    name: 'February 27th (101 BPM)',
    title: 'Free Funk Fridays, Vol. 3 [101 BPM]',
    record: 'Taking A Break At Iron Wax',
    url: '/assets/features/taking-a-break/audio/fff-vol3.mp3',
    cover: '/assets/features/taking-a-break/fff-vol3.jpg',
    length: '3:19',
    download: [
      { format: 'wav', url: 'https://drive.google.com/file/d/0B6YTd8a7xh7VNk13dHdUbEl6dzg/view' },
      { format: 'mp3', url: 'https://drive.google.com/file/d/0B6YTd8a7xh7VWUQ2ZzJaYU5TUEE/view' }
    ]
  },
  {
    name: 'April 10th (96 BPM)',
    title: 'Free Funk Fridays, Vol. 4 [96 BPM]',
    record: 'Taking A Break At Iron Wax',
    length: '4:06',
    url: '/assets/features/taking-a-break/audio/fff-vol4.mp3',
    cover: '/assets/features/taking-a-break/fff-vol4.jpg',
    download: [
      { format: 'wav', url: 'https://drive.google.com/file/d/0B6YTd8a7xh7VU3VjeWhHS01iQ2c/view' },
      { format: 'mp3', url: 'https://drive.google.com/file/d/0B6YTd8a7xh7VOXFFSzNwczRHVlU/view' }
    ]
  }
];

const TakingABreak = {
  name: 'Taking a Break At Iron Wax',
  id: 'taking-a-break',
  banner: 'assets/features/taking-a-break/kit.jpg',
  bannerPosition: 'center 80%',
  info: (
    <p>
      <strong>Taking A Break At Iron Wax</strong> is collection of Alan Evans drum breaks recorded at the home of many Vintage League releases, Iron Wax Studios. These breaks are offered to you as inspiration for your next creation. We would love to hear what you do with the drum breaks as Alan will be handpicking his favorites to be shared with the world by Vintage League. Enjoy responsibly. Let’s make some music together!
    </p>
  ),
  content: (
    <TrackPanel tracks={Tracks} />
  )
};

export default TakingABreak;
