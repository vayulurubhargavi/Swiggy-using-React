import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // state
        this.state = {
            userInfo: {
                name: 'Dummy user',
                location: 'somewhere on Earth',
                url: '',
                image: 'user-image'
            }
        }
        // console.log( this.props.name+'child constructore')
    }

    async componentDidMount() {
         console.log( ' componentDidMount called...')
        const data = await fetch('https://api.github.com/users/vayulurubhargavi');
        const res = await data.json();
        console.log(res);
        this.setState({
            userInfo: res
        })
       }

        componentDidUpdate(){
            console.log('component updated..');
        }
        componentWillUnmount(){
            console.log('component removed/unmounted from DOM')
        }
    
        render() {
            const { name, location, html_url, avatar_url } = this.state.userInfo;
             console.log(' render');

            // debugger;(used to debug code)
            return (
                <div className='user'>
                    {/* <h1>Count:{this.state.count}</h1> */}
                    {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>
                    Increase Count</button> */}
                    <div style={{ marginRight: '40px' }}>
                        <h3>Name: {name}</h3>
                        <h4>Location : {location}</h4>
                        <h5>Contact: <a href='https://github.com/vayulurubhargavi'>{html_url}</a></h5>
                    </div>
                    <img src={avatar_url} alt='image-user' className="image" />
                </div>
            )
        }
    }


export default UserClass;