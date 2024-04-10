import Loader from 'react-loader-spinner'
import './index.css'

const ProgressView = () => (
  <div className="progress-container">
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
    </div>
  </div>
)

export default ProgressView
