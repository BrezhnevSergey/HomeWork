/*
var TABS_LIST = [
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

    getInitialState: function () {
        return {
            tabs_list: TABS_LIST,
            current_tab: 1
        };
    },

    render: function () {

        return (
            <div className="tabs_wrapper">
                <ul>
                    {
                        this.state.tabs_list.map(function (item) {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
                <div className="tabs">
                    {
                        this.state.tabs_list.map(function (item) {
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

ReactDOM.render( <Tabs />, document.getElementById("content"));*/


var tabList = [
    {
        id: 1,
        name: 'Tab1',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        url: '/Tab1',
        imageURL: 'img/img1.jpg'
    },
    {
        id: 2,
        name: 'Tab2',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        url: '/Tab2',
        imageURL: 'img/img2.jpg'
    },
    {
        id: 3,
        name: 'Tab3',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        url: '/Tab3',
        imageURL: 'img/img3.jpg'
    },
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
                <a onClick={this.handleClick} href={this.props.url}>
                    {this.props.name}
                </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function(){
        return (
            <nav>
                <ul>
                    {this.props.tabList.map(function(tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                imageURL={tab.imageURL}
                                isCurrent={(this.props.currentTab === tab.id)}
                            />
                        );
                    }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var Content = React.createClass({
    render: function(){
        if (this.props.currentTab === 1) {
            console.log(this.props.imageURL);
            return (
                 <div>
                    <img src = {this.props.tabList[key=0]} />
                </div>
            );
        }
       /* return(
            <div className="content">
                {this.props.currentTab === 1 ?
                    <div>
                        <img src = {this.props.imageURL} />
                    </div>
                    :null}

                {this.props.currentTab === 2 ?
                    <div>
                        <img src="http://s.mlkshk.com/r/103AG" />
                    </div>
                    :null}

                {this.props.currentTab === 3 ?
                    <div>
                        <img src="http://s.mlkshk.com/r/JAUD" />
                    </div>
                    :null}
            </div>
        );*/
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function(){
        return(
            <div>
                <Tabs
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                />
                <Content
                    currentTab={this.state.currentTab}
                    imageURL={this.state.tabList}
                />
            </div>
        );
    }
});

ReactDOM.render( <App />, document.getElementById("content"));

