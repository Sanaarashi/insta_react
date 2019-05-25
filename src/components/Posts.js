import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://wallbox.ru/wallpapers/main/201201/priroda-park-derevya-48a1e35.jpg"/>
                <Post alt="nature" src="https://wallbox.ru/wallpapers/main/201201/priroda-park-derevya-48a1e35.jpg"/>
            </div>
        )
    }
}