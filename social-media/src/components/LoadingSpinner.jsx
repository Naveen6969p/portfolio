

const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center spinner">
    <div class="spinner-border" style={{width: "6rem" ,height: "6rem"}}role="status" >
      <span class="visually-hidden" s>Loading...</span>
    </div>
  </div>
  )
}

export default LoadingSpinner