import {NavLink} from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Co2Sharp } from '@mui/icons-material';


const NavItem = ({key, item, classes}) => (
    <nav key={key}>
      <NavLink  to={item.path}>
        <Tooltip title={item.label} placement="bottom-end" >
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label}/>
          </ListItem>
        </Tooltip>
      </NavLink>
    </nav>
  );

const Item = props => {
  console.log("NavItem");
  
  return <NavItem {...props}/>;
};

const CustomList = ({items}) => {
  
  console.log("CustomList");
    return (
      <List>
        {Object.keys(items).map(key => <Item key={key} item={items[key]} />)}
      </List>
    );
};

export default CustomList;