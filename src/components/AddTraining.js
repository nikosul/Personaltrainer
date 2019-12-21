import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddTraining(props) {

  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    activity:'', date:'', duration:'', customer:''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value })
  }

  const addNewTraining = () => {
    props.saveTraining(training);
    handleClose();
  }

  return (
    <div>
      <Button color='primary' size='small' onClick={handleClickOpen}>
        New Training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Training</DialogTitle>
        <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name='activity' value={training.activity} onChange={e => handleInputChange(e)}
              label="Activity"
              fullWidth
            />
            <TextField
              margin="dense"
              name='date' value={training.date} onChange={e => handleInputChange(e)}
              label="Date"
              fullWidth
            /><TextField
              margin="dense"
              name='duration' value={training.duration} onChange={e => handleInputChange(e)}
              label="Duration (min)"
              fullWidth
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addNewTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}