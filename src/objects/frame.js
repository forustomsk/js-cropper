import Point from "./point";
import Size from "./size";

const frameProportion = 0.85;

/**
 * Class representing a Frame element
 */
export default class Frame {
    /**
     * Create a frame
     */
    constructor() {
        this._size = 0;
        this._origin = {
            x: 0,
            y: 0,
        };
    }

    /**
     * Update size and coordinates of rectangle (frame)
     *
     * @param {Object} parent - A parent node.
     * @return {Pattern} A Pattern object.
     */
    update(parent) {
        this._size = (parent.width > parent.height) ? parent.height * frameProportion : parent.width * frameProportion;
        this._origin = {
            x: (parent.width - this._size) / 2,
            y: (parent.height - this._size) / 2,
        };
        return this;
    }

    /**
     * Get rectangle properties.
     *
     * @return {Point} origin - An origin Point, which in the upper-left corner and the rectangle extends towards the lower-right corner.
     * @return {Size} size - A size that specifies the height and width of the rectangle.
     */
    getRect() {
        return {
            origin: new Point(this._origin.x, this._origin.y),
            size: new Size(this._size, this._size),
        }
    }

    /**
     * Get the smallest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The smallest value of the x-coordinate for the rectangle.
     */
    getMinX() {
        return this._origin.x;
    }
    
    /**
     * Get the largest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The largest value of the x-coordinate for the rectangle.
     */
    getMaxX() {
        return this._origin.x + this._size;
    }

    /**
     * Get the smallest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The smallest value of the x-coordinate for the rectangle.
     */
    getMinY() {
        return this._origin.y;
    }

    /**
     * Get the largest value of the x-coordinate for the rectangle.
     *
     * @return {Number} - The largest value of the x-coordinate for the rectangle.
     */
    getMaxY() {
        return this._origin.y + this._size;
    }
};