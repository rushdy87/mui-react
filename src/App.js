import { Box, Stack } from '@mui/material';
import { Navbar, Sidebar, Feed, Rightbar } from './components';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

/*
- Box:
The Box component serves as a wrapper component for most of the CSS utility needs.

- Container
The container centers your content horizontally. It's the most basic layout element.
While containers can be nested, most layouts do not require a nested container.

- Grid
The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
The grid system is implemented with the Grid component:
  *It uses CSS's Flexible Box module for high flexibility.
  *There are two types of layout: containers and items.
  *Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
  *Items have padding to create the spacing between individual items.
  *There are five grid breakpoints: xs, sm, md, lg, and xl.
  *Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the 
  component when the viewport width satisfies the breakpoint constraints.

- Stack
The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or 
dividers between each child.

-Breakpoints
API that enables the use of breakpoints in a wide variety of contexts
Each breakpoint (a key) matches with a fixed screen width (a value):
  * xs, extra-small: 0px
  * sm, small: 600px
  * md, medium: 900px
  * lg, large: 1200px
  * xl, extra-large: 1536px
 */
