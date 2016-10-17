var TABS_CONTENT = [
    {
        id: 1,
        name: 'Tab1',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageURL: 'img/img1.jpg'
    }, {
        id: 2,
        name: 'Tab2',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageURL: 'img/img2.jpg'
    }, {
        id: 3,
        name: 'Tab3',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageURL: 'img/img3.jpg'
    }
];

var Tab = React.createClass({
    getInitialState: function () {
        return {
            show: false
        }
    },
    
    render: function () {
            return  (
                <div className="tab">
                    <h1>{this.props.name}</h1>
                    <img src={this.props.imageURL} />
                    <span>{this.props.text}</span>
                </div>
            );
    }
});

var Tabs = React.createClass({


    render: function () {
        var liClass = this.props.show ? 'active' : '';
        return (
            <div className="tabs_wrapper">
                <ul>
                    {
                        TABS_CONTENT.map(function (item) {
                            return <li key={item.id} className={liClass}>{item.name}</li>
                        })
                    }
                </ul>
                <div className="tabs">
                    {


                        TABS_CONTENT.map(function (item) {
                                return <Tab
                                    key={item.id}
                                    name={item.name}
                                    text={item.text}
                                    imageURL={item.imageURL}
                                />
                            })
                        }

                    </div>
                </div>
            );

    }
});

ReactDOM.render( <Tabs />, document.getElementById("content"));