import React, { Component } from 'react'
import Current from './Current'
import Planning from './Planning'
import Completed from './Completed'

export default class Listings extends Component {
    constructor(props){
        super(props);
        //default states
        this.state = {
            current: [],
            planning: [],
            completed: []
        }
    }

    componentDidMount(){
        this.findCompleted();
        this.findCurrent();
        this.findPlanning();
    }
    
    findCurrent(){
        this.props.lists.map(item => {
            if(item.Status === "Current"){
                this.state.current.push(item)
            }
            // console.log("current")
            // console.log(this.state.current)
        })
    }
    findCompleted(){
        this.props.lists.map(item => {
            if(item.Status === "Completed"){
                this.state.completed.push(item)
            }
            // console.log("completed")
            // console.log(this.state.completed)
        })
    }

    findPlanning(){
        this.props.lists.map(item => {
            if(item.Status === "Planning"){
                this.state.planning.push(item)
            }
            // console.log("planning")
            // console.log(this.state.planning)
        })
    }

    render() {
        return (
            <div className="container">
                <Current current={this.state.current} />
                <Planning planning={this.state.planning} />
                <Completed completed={this.state.completed} />
            </div>
        )
    }
}
