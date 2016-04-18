import { PropTypes } from 'react';
import './index.sty'

class An extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            enter: false
        }
    }

    mouseEnter() {
        this.setState({ enter: true})
    }

    mouseLeave() {
        this.setState({ enter: false})
    }

    render() {
        var AnClass = "An-mask animated enter-" + this.state.enter
        return <div className="An"  onMouseOver={this.mouseEnter.bind(this)} onMouseOut={this.mouseLeave.bind(this)}>
            <div className={AnClass} >
                content
            </div>
        </div>
    }
}

export default An
