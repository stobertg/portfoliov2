import React from 'react'
import styles from "./style.scss"

// Components needed

class Logo extends React.Component {
	render() {
		return (
		  
		  <div className={`logo ${this.props.align ? 'logo__align--' + this.props.align:''} ${this.props.color ? 'logo__' + this.props.color:''}`}>
        <span className={`logo__mark ${this.props.size ? 'logo__mark--' + this.props.size:''} ${this.props.type ? 'logo__' + this.props.type:''}`}>
          {this.props.type == "mywalgreens--full"
            ? <img src="/global/logo-mywag-full.png" alt="My Walgreens Logo" />
            : null
          }

          {this.props.type == "mywalgreens--full-white"
            ? <img src="/global/logo-mywag-full-white.png" alt="My Walgreens Logo" />
            : null
          }

        	{this.props.type == "mywalgreens"
						? <img src="/global/logo-mywag.png" alt="My Walgreens Logo" />
						: null
        	}

        	{this.props.type == "mywalgreens--white"
						? <img src="/global/logo-mywag-white.png" alt="My Walgreens Logo" />
						: null
        	}

          {this.props.type == "logo--mark"
            ? <img src="/global/logo-mark.svg" alt="Walgreens logo" />
            : null
          }
        </span>

        {this.props.title
        	? <span><strong>{this.props.title}</strong></span>
        	: null
        }
      </div>

		)
	}
}

export default Logo
