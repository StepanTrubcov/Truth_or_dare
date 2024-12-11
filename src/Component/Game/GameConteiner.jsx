import { connect } from "react-redux"
import Game from "./Game"


const mapStateToProps = (state) =>({
    question:state.question
})

export default connect(mapStateToProps)(Game)