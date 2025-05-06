import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function SideBar() {
  return (
      <div className="sidebar">
          <div className="bg-overlay"></div>
          <div className="sidebar-contents">
              <h2>The Mars Landscape</h2>
              <div>
                  <p>Description</p>
                  <p>
                      Mars is the fourth planet from the Sun and the
                      second-smallest planet in the Solar System, being larger
                      than only Mercury. In English, Mars carries a name of the
                      Roman god of war and is often referred to as the "Red
                      Planet".
                  </p>
              </div>
              <button>
                  <ArrowBackIosIcon />
              </button>
          </div>
      </div>
  );
}
