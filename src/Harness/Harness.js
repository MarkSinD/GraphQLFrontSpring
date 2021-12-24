import React, {Component} from 'react';
import MiniDrawer from './MiniDrawer';
import CustomList from './CustomList';


class HarnessErrorBoundary extends Component {

    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      const {listen} = this.props;
      
    }
  
    render() {
      console.log("HarnessErrorBoundary");
      const {children, menuItems} = this.props;
      let content = children;
      
      return (
        <section>
          <div>
            <MiniDrawer content={children}>
              <CustomList items={menuItems} />
            </MiniDrawer>
          </div>
        </section>
      );
    }
  }

const Harness = ({children, menuItems}) => {
  console.log("Harness");
  
    return (
      <HarnessErrorBoundary menuItems={menuItems}>
        {children}
      </HarnessErrorBoundary>
    );
  };

  export default Harness;