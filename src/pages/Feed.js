import React, { Component } from "react";
//api
import api from "../services/api";
import io from 'socket.io-client';

//Estilo
import "./Feed.css";
//import {PostList} from './FeedStyles'; //componente estilizado

//Icones
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import send from "../assets/send.svg";
import comment from "../assets/comment.svg";

class Feed extends Component {
  state = {
    feed: []
  };
  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get("posts");

    this.setState({ feed: response.data });
  };

  registerToSocket = () => {
      const socket = io('https://tchelogram-backend.herokuapp.com');//io('http://localhost:3002');

      socket.on('post', newPost =>{
        this.setState({feed: [newPost, ...this.state.feed]}); 
      });

      socket.on('like', likedPost => {
          this.setState({
              feed: this.state.feed.map(post => 
                post._id === likedPost._id ? likedPost : post
                )
          })
      })

  }

  handleLike = id => {
      api.post(`/posts/${id}/like`);
  };

  render() {
    return (
      <section id="post-list">
      {/* //<PostList> */}
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>

            <img src={`https://tchelogram-backend.herokuapp.com/files/${post.image}`} alt="" />

            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="" />
                </button>

                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{post.likes} curtidas</strong>
              <p> {post.description}</p>
              <span>{post.hashtags}</span>
            </footer>
          </article>
        ))}
      {/* //</PostList> */}
     </section>
    );
  }
}

export default Feed;
