import { useState } from 'react';
import {
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
  Box,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material';
import {
  Add as AddIcon,
  AddAPhoto,
  DateRange,
  EmojiEmotions,
  LocalOffer,
  VideoCall,
} from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: {
            xs: 'calc(50% - 25px)',
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="whitesmoke"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Miranda Cohen"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2EwZGxrzoWWhiDst647sBEXdGOnS2lmynBhD8iherGxYoTEzNlrGUF_uPiJIPYTyPlE&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="caption" fontWeight={500}>
              Miranda Cohen
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            placeholder="Write your thoughts"
            multiline
            rows={3}
            variant="standard"
            sx={{ width: '95%' }}
          />
          <Stack direction="row" gap={1} my={2}>
            <EmojiEmotions color="primary" />
            <AddAPhoto color="secondary" />
            <VideoCall color="error" />
            <LocalOffer color="success" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Share</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
