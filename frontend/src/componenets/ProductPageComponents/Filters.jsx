import React, { useState } from "react";
import Dropdown from "./dropdown";
import "../../styles/Filters.css";

const Filter = ({ filters, setFilters, products, isOpen, onClose }) => {
    const sizes = ['XS', 'S', 'M', 'L', 'XL',];
    const priceRanges = [
        { label: "$0 - $100", min: 0, max: 100 },
        { label: "$100 - $200", min: 100, max: 200 },
        { label: "$200 - $300", min: 200, max: 300 },
        { label: "$300 - $400", min: 300, max: 400 },
        { label: "$400 - $500", min: 400, max: 500 },
        { label: "$500 - $600", min: 500, max: 600 },
        { label: "$600 - $700", min: 600, max: 700 },
        { label: "$700 - $800", min: 700, max: 800 },
        { label: "$800 - $900", min: 800, max: 900 },
        { label: "$900 - $1000", min: 900, max: 1000 },
        { label: "$1000+", min: 1000, max: Infinity }
    ];

    const inStockCount = products.filter(p => p.stock > 0).length;
    const outOfStockCount = products.filter(p => p.stock <= 0).length;

    const toggleSize = (size) => {
        setFilters(prev => ({
            ...prev,
            size: prev.size === size ? null : size
        }));
    };

    const handleAvailabilityChange = (type) => {
        setFilters(prev => ({
            ...prev,
            availability: prev.availability === type ? null : type
        }));
    };

    return (
        <div className={`filters-container ${isOpen ? "open" : ""}`}>
            
                   
                   <button className="close-filter-btn" onClick={onClose}>✕</button>


            {/* Size Filter */}
            <div className="filter-section">
                <h2 className="filter-title">Size</h2>
                <div>
                    {sizes.map(size => (
                        <button
                            key={size}
                            className={`size-button ${filters.size === size ? "active" : ""}`}
                            onClick={() => toggleSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Availability Filter */}
            <div className="filter-section">
                <h2 className="filter-title">Availability</h2>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={filters.availability === 'in'}
                        onChange={() => handleAvailabilityChange('in')}
                        className="mr-2"
                    />

                    In Stock <span style={{ marginLeft: '19px', color: '#000E8A', fontFamily: 'Beatrice-extrabold, sans-serif' }}>({inStockCount})</span>
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={filters.availability === 'out'}
                        onChange={() => handleAvailabilityChange('out')}
                        className="mr-2"
                    />
                    Out of Stock <span style={{ marginLeft: '6px', color: '#000E8A', fontFamily: 'Beatrice-extrabold, sans-serif' }}>({outOfStockCount})</span>
                </label>
            </div>

            <Dropdown title="Tags">
                {[...new Set(products.flatMap(p => p.tags))].map(tag => (
                    <label key={tag} className="custom-checkbox-label">
                        <input
                            type="checkbox"
                            checked={filters.tags?.includes(tag)}
                            onChange={() => {
                                setFilters(prev => ({
                                    ...prev,
                                    tags: prev.tags?.includes(tag)
                                        ? prev.tags.filter(t => t !== tag)
                                        : [...(prev.tags || []), tag]
                                }));
                            }}
                        />
                        <span className="checkmark"></span>
                        {tag}
                    </label>
                ))}
            </Dropdown>

            <Dropdown title="Category">
                {[...new Set(products.map(p => p.category))].map(category => (
                    <label key={category} className="custom-checkbox-label">
                        <input
                            type="checkbox"
                            checked={filters.categories?.includes(category)}
                            onChange={() => {
                                setFilters(prev => ({
                                    ...prev,
                                    categories: prev.categories?.includes(category)
                                        ? prev.categories.filter(t => t !== category)
                                        : [...(prev.categories || []), category]
                                }));
                            }}
                        />
                        <span className="checkmark"></span>
                        {category}
                    </label>
                ))}
            </Dropdown>

            <Dropdown title="Color">
                {[...new Set(products.map(p => p.color))].map(color => (
                    <label key={color} className="custom-checkbox-label">
                        <input
                            type="checkbox"
                            checked={filters.colors?.includes(color)}
                            onChange={() => {
                                setFilters(prev => ({
                                    ...prev,
                                    colors: prev.colors?.includes(color)
                                        ? prev.colors.filter(c => c !== color)
                                        : [...(prev.colors || []), color]
                                }));
                            }}
                        />
                        <span className="checkmark"></span>
                        {color}
                    </label>
                ))}
            </Dropdown>

            <Dropdown title="Price Range">
                {priceRanges.map((range, index) => (
                    <label key={index} className="custom-checkbox-label">
                        <input
                            type="checkbox"
                            checked={filters.prices?.some(
                                r => r.min === range.min && r.max === range.max
                            )}
                            onChange={() => {
                                setFilters(prev => {
                                    const exists = prev.prices?.some(
                                        r => r.min === range.min && r.max === range.max
                                    );
                                    return {
                                        ...prev,
                                        prices: exists
                                            ? prev.prices.filter(r => r.min !== range.min || r.max !== range.max)
                                            : [...(prev.prices || []), range]
                                    };
                                });
                            }}
                        />
                        <span className="checkmark"></span>
                        {range.label}
                    </label>
                ))}
            </Dropdown>
        </div>
    );
};

export default Filter;
