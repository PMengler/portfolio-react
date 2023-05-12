const styles = {
  body: {
    backgroundColor: 'red',
  },
  h1: {
    margin: '20px',
    color: '#212531',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  section: {
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    minWidth: '300px',
    maxWidth: '600px',
  },
  img: {
    maxWidth: '320px',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
  },
  imgProj: {
    width: '275px',
    height: '275px',
    margin: '50px',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
    cursor: 'pointer',
  },
  p: {
    color: '#212530',
    fontFamily: 'Open Sans, sans-serif',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '20px',
  },
  description: {
    fontWeight: 'bold',
  },
  skills: {
    textAlign: 'center',
  },
  modal: {
    display: 'block',
    position: 'fixed',
    zIndex: 1,
    paddingTop: '20%',
    // paddingLeft: '10%',
    // paddingRight: '10%',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    color: '#212531',
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #888',
    width: '50%',
  },
  closeButton: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default styles;
