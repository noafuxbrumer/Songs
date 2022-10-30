import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import './Song.css';
import { useNavigate } from 'react-router-dom';


const Songs = (props) => {
  // const [songs, Setsongs] = useState([]);
  const navigate = useNavigate();

  const deleteSong = (Id) => {
    axios.delete(`https://localhost:44319/api/song/${Id}`).then(x => {
      console.log(x)

      alert("השיר נמחק")
      props.delete(Id)

    })
  }
  useEffect(() => {
    axios.get("https://localhost:44319/api/song").then(x => {
      props.allsong(x.data)
      console.log(x)
    }).catch(err => { console.log(err) })

  }, [])


  const goAddd = () => {
    navigate('/addSong')
  }
return <div id='container'>
    <Button size="big" variant="contained" color="primary" disableElevation  onClick={goAddd}>🎼הוספת שיר</Button>
   <br></br>
   <br></br>
    {props.songs.map(x => <div key={x.Id} >
      <Card>

        <CardMedia
          component="img"
          height="50%"
          image={"pic/" + x.Img}
        />

        <CardContent> {x.Songer}
          <Typography gutterBottom variant="h5" component="h2">
            {x.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {x.Id}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small"  variant="contained" color="primary" disableElevation  onClick={() => { deleteSong(x.Id); }} >
            מחיקה🗑
          </Button>
          <Button size="small" variant="contained" color="primary" disableElevation  onClick={() => navigate('/addsong/' + x.Id)} >
            ⚒עריכה
          </Button>
        </CardActions>

      </Card>
    </div>)}
  </div>
}
const mapDispatchToProps = dispatchEvent => {
  return {
    allsong: (songs) => dispatchEvent({ type: "SAVE_SONGS", songs: songs }),
    delete: (songId) => dispatchEvent({ type: "DELETE_SONG", id: songId })
  }
}
const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)


