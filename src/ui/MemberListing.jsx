import React from 'react';

class MemberListing extends React.Component {
  constructor (props) {
    super(props);
  }

  makeMemberItem (member) {
    return (
      <box className="MemberItem" key={member.id}>
        {member.photo && <img src={member.photo} alt={'Photo of ' + member.name} className="full" />}
        {member.name && <h6 className="Member-Name">{member.name}</h6>}
        {member.of && <h6 className="Member-Of"><em>of</em> {member.of}</h6>}
        {member.on && <h6 className="Member-On"><em>on</em> {member.on}</h6>}
        {member.bio && <div className="Member-Bio">{member.bio}</div>}
      </box>
    );
  }

  render () {
    let { className, members } = this.props;
    const list = members.map(this.makeMemberItem);
    className = 'MemberListing'
      + (className ? ' ' + className : '')
      + (members.length <= 3 ? ' short' : '');

    return (
      <row className={className}>
        <strong>Featuring</strong>
        {list}
      </row>
    );
  }
}

export default MemberListing;
