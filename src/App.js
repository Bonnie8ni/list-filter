import React, { Component } from 'react';
// import lessons from './lessons.json';

// 註解的地方是未接 api 的方式
class App extends Component {
    state = {
        filter: '',
        // lessons,
        lessons: [],
    }

    componentDidMount() {
        this.fetchLessons();
    }

    onChangeFilter = (e) => {
        this.setState({
            filter: e.target.value,
        }, this.fetchLessons)
    }

    fetchLessons = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            const { filter } = this.state;
            fetch(`/api/lessons?filter=${filter}`)
                .then(rs => rs.json())
                .then(lessons => this.setState({ lessons }))
        } , 1000);
    }

    render() {
        const { lessons } = this.state;
        // const { filter, lessons } = this.state;
        // const visibleLessons = lessons.filter((lesson) => (
        //     lesson.title.toLowerCase().includes(filter.toLowerCase())
        // ));

        return (
            <div>
                <input
                    type="text"
                    onChange={this.onChangeFilter}
                />
                <ul>
                    {lessons.map((lesson) => (
                        <li key={lesson.id}>{lesson.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;