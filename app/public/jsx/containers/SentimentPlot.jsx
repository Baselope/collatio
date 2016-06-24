import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { fetchReddit } from '../actions/reddit.jsx'
// import { fetchTwitter } from '../actions/twitter.jsx'
import HoverInfo from './HoverInfo.jsx'

import node from '../../d3/d3Plot.jsx'
import time from '../../d3/d3Time.jsx'

import rd3 from 'react-d3-library'

import Metrics from './Metrics.jsx'
import NavBar from '../components/NavBar.jsx'


const RD3Component = rd3.Component

class SentimentPlot extends React.Component {

  constructor(props) {
    super(props);
    this.d3Render.bind(this);
  }

  d3Render() {
    console.log(this.props.d3.graph.plot);
    if(!this.props.d3.graph.plot)
      return '<div></div>';
    return this.props.d3.graph.plot;
  }

  render() {
    console.log('SENTIMENT props:',this.props);
    return (
      <div>
        <div className="valign-wrapper" style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
          }}>
          <div className="valign container center-align" style={{
            left: 0,
            right: 0,
            overflow: 'visible',
            }}>
            <RD3Component data={this.d3Render()} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state,props) => ({
    d3: state.d3,
    data: {twitter:state.twitter.data, reddit:state.reddit.data}
  });

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchTwitter, fetchReddit }, dispatch);
// };

export default connect(mapStateToProps)(SentimentPlot)