import React from 'react';
import Article from './Article';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const authorName="Miyashita";
        return (
            <React.Fragment>
                <Article title={"reactの使い方"}
                order ={3}
                isPublished={true}
                author={authorName}
                />
                <Article title={"222reactの使い方"}
                order ={3}
                isPublished={true}
                author={authorName}
                />
            </React.Fragment>
        )
    }
}

export default Blog