import { profileSelector } from '../../selectors/profile'
import { bindActionCreators } from 'redux'
import { changeName } from '../../actions/profile'
import { connect } from 'react-redux'
import Home from './index'

const mapStateToProps = (globalState) => {
    return profileSelector(globalState)
}
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            onChangeProfileName: changeName,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
