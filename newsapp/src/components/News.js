import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Panda News - Top Headline</h2>
        <div className="row">
            <div className="col-md-6">
                <NewsItem title = "myTitle" description = "myDesc"/>
            </div>
            <div className="col-md-6">
                <NewsItem title = "myTitle" description = "myDesc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
