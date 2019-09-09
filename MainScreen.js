import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

class MainScreen extends React.Component {
state={}

render() {
  return (

    <div className="App">
      <div
        style={{

          height: '300px',
          backgroundColor: 'lightgrey',
        }}
        className="row align-items-center"
      >
        <div className="col">

          <Header titulo="Galahad Nista Brasil" />
          <Header titulo="O gato mais lindo de todos <3" style={{ fontSize: 20 }} />
        </div>
        <img
          style={{
            position: 'absolute',
            width: '100%',
            opacity: 0.4,
            height: '300px',
            objectFit: 'cover',
          }}
          alt="foto do galahad"
          src="https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/67766695_2440209946070034_204195591499022336_n.jpg?_nc_cat=104&_nc_oc=AQl8cVLYn6NUMWLsZgA_ycgewvNToohatj5zXRBGPIai356IGb5mS3jgwz25Tf9nMZM&_nc_ht=scontent.fbsb8-1.fna&oh=f39b487c1f6592ad94504c8517ff63c6&oe=5E13D48C"
        />
      </div>

      <div className="row justify-content-around" style={{ marginTop: 50 }}>

        <div className="card col-2">
          <div className="card-body">
            <h5 className="card-title">Instagram</h5>
            <p className="card-text">@ogatogalahad</p>
            <Button texto="Link do Instagram" link="https://www.instagram.com/ogatogalahad/"> </Button>
          </div>
        </div>
        <div className="card col-2">
          <div className="card-body">
            <h5 className="card-title">Instagram da dona</h5>
            <p className="card-text">@rainhavisenya</p>
            <Button texto="Link do Instagram" link="https://www.instagram.com/rainhavisenya/"> </Button>
          </div>
        </div>
        <div className="card col-2">
          <div className="card-body">
            <h5 className="card-title">Facebook da dona</h5>
            <p className="card-text">Imagine o link aqui</p>
            <Button texto="Link do Facebook" link="https://www.facebook.com/RainhaVisenyaTargaryen"> </Button>
          </div>
        </div>

      </div>

    </div>
  );
}
}

export default MainScreen;
