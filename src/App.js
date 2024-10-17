import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import TabMenu from './TabMenu';
import Article from './Article';

export default class App extends Component {

  constructor(props) {
    super(props);
    // 여기서 this.setState()를 호출하면 안된다!
    this.state = {
      subject:{title:'Header', desc:'Header explanation'}
    }
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        />
        <Banner />
        <TabMenu />
        <Article title="HTML" desc="Hypertext Markup Language" />
      </div>
    )
  }
}

