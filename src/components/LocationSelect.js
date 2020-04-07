import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'

const LocationSelect = ({
  label,
  visibleLocationNames,
  setVisibleLocationNames,
  locationNames,
}) => {
  const handleChange = (event) => {
    setVisibleLocationNames(event.target.value)
  }

  const menuItemHeight = 48
  const menuItemPaddingTop = 8

  const MenuProps = {
    disableScrollLock: true,
    PaperProps: {
      style: {
        // maxHeight: menuItemHeight * 4.5 + menuItemPaddingTop,
        width: 250,
      },
    },
  }

  return (
    <FormControl>
      <InputLabel id="states">{label}</InputLabel>
      <Select
        labelId="states"
        id="state-selector"
        multiple
        value={visibleLocationNames}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {locationNames.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default LocationSelect
