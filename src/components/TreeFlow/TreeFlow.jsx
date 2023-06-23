import React from 'react'
import '../../App.css';
import Tree from "react-d3-tree";
import orgChartJson from "../../data/org-chart.json";
import { useCenteredTree } from "../../helpers";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import "../../style.css";


const containerStyles = {
    width: "91vw",
    height: "100vh",
    background: "#fff"
};

const useStyles = makeStyles(
    createStyles({
        button: {
            position: "relative",
            width: "250px",
            height: "150px",
            background: "#f6f6f6",
            color: "black",
            "& > span": {
                flexFlow: "column"
            },
            "&:hover": {
                background: "white"
            }
        },
        name: {
            fontSize: "16px"

        },
        edit: {
            position: "absolute",
            top: "0px",
            right: "0px",
        },
        attributes: {
            position: "absolute",
            bottom: "5px",
            right: "10px"
        }
    })
);

const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
    classes
}) => {

    return (
        <>
            <foreignObject {...foreignObjectProps} >
                <img src={require(`../../image/${nodeDatum.img ? nodeDatum.img : 'download.jpg'}`)} alt='profile' className='profile' />
                <Button
                    className={classes.button}
                    variant="contained"
                >
                    <div className={classes.name} style={{ fontWeight: "600" }}> {nodeDatum.name} </div>
                    <div className={classes.name} style={{ color: "#6A6A6A" }}> {nodeDatum.name2} </div>
                    <IconButton className={classes.edit} aria-label="edit">
                        <MoreHorizIcon />
                    </IconButton>
                    <div className='retail'>
                        {nodeDatum.retail && <span><ShoppingCartIcon /> Retail</span>}
                    </div>
                </Button>
                <div className='details'>
                    {nodeDatum.dropdown && <span className="box">11  <KeyboardArrowDownOutlinedIcon style={{ color: "white", borderColor: "white", fontSize: "14px" }} />
                    </span>}
                </div>
                <span className="plus" onClick={toggleNode}>+</span>
            </foreignObject>
        </>
    )
};

const TreeFlow = () => {

    const [translate, containerRef] = useCenteredTree();
    const classes = useStyles();
    const nodeSize = { x: 300, y: 250 };
    const separation = { siblings: 1, nonSiblings: 2 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };

    return (
        <>
            <div className='content'>
                <div className='up_row'>
                    <div className='people'>People <AddIcon className='icon' /></div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <input type='text' placeholder='Search' />
                        <div className='filter'>
                            <FilterListIcon style={{ width: "16px" }} />
                            Filter
                        </div>
                    </div>
                </div>
                <div className='second_up_row'>
                    <div className='second_row'>
                        <div className='row_icon_div'>
                            <ListOutlinedIcon className='second_row_icon' />
                        </div>
                        <div className='row_icon_div'><GridViewOutlinedIcon className='second_row_icon' /></div>
                        <div className='row_icon_div' style={{ backgroundColor: "white", borderRadius: "5px" }}><DeviceHubOutlinedIcon className='second_row_icon' /></div>
                    </div>
                </div>
                <div style={containerStyles} ref={containerRef} >
                    <Tree
                        data={orgChartJson}
                        translate={translate}
                        nodeSize={nodeSize}
                        separation={separation}
                        transitionDuration="1000"
                        pathFunc="step"
                        rootNodeClassName="node__root"
                        branchNodeClassName="node__branch"
                        leafNodeClassName="node__leaf"
                        renderCustomNodeElement={(rd3tProps) =>
                            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, classes })
                        }
                        orientation="vertical"
                    />
                </div>
            </div>
        </>
    );
}

export default TreeFlow;