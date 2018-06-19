import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';
import Reader from 'components/Reader';

const digitize = (i) => i >= 10 ? i.toString() : '0' + i.toString();

const getPageList = () => {
  const output = [];
  for (let i = 1; i <= 15; i++) {
    output.push(`/assets/features/agent-3-comic/pages/p${digitize(i)}.jpg`);
  };
  return output;
};

const getPages = (limit = 15) => {
  const output = [];
  const pageList = getPageList();
  for (let i = 1; i <= 8; i++) {
    let double = (i * 2);
    let set = [ double - 1, double ];
    let left = pageList[set[0] - 1];
    let right = pageList[set[1] - 1];

    output.push({
      content: (
        <row>
          <box className="xs-6 p5">
            <img src={left} className="full" />
          </box>
          {double <= limit ? (
            <box className="xs-6 p5">
              <img src={right} className="full" />
            </box>
          ) : (
            <box className="xs-6 p5">

            </box>
          )}
        </row>
      )
    })
  }
  return output;
}

const PageList = getPageList();
const Pages = getPages();

const Agent3Comic = {
  name: 'Agent 3: BAND OF SPIES Official Comic',
  id: 'agent-3-comic',
  artistId: 'agent-3',
  bannerPosition: 'center 50%',
  banner: 'assets/features/comic-preview-trim.jpg',
  info: (
    <stack>
      <p>
        You know <Link to="/music/agent-3">the all new record and star-studded band</Link>, now check out <em>Volume 1</em> of the original comic. Featuring Alan, DJ, and Darby as their mastermind-foiling alter-egos <strong>Tiger Claw</strong>, <strong>Shadow Snake</strong>, and <strong>The Wolf</strong> as AGENT 3 save the world in style.
      </p>
      <p>
        Comic by Courtland Ellis (Pencil and Ink), Jeff McComsey (Script), Graey Erb (Background Art), Joseph Krzemienski (Color, Text, & Layout) and Natasha Washawsky (Nerd Wrangling/Project Management)
      </p>
      <small className="self-start o2 box drop20">
        This comic, music, and all characters, illustrations, and other creative content are copyright 2017 Vintage League Music. All Rights Reserved.
      </small>
      <box className="self-end">
        <a href="/assets/media/A3_Comic_03_Single_r.pdf" target="_blank">
          <button className="sleek caps">Download the PDF</button>
          <button className="attache"><Icon fa="arrow-down" /></button>
        </a>
      </box>
    </stack>
  ),
  content: (
    <div>
      <Reader pages={Pages} imageSet={PageList} />
    </div>
  )
};

export default Agent3Comic;
