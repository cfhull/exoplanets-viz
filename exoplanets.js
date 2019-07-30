import * as d3 from 'd3'
import { legendColor } from 'd3-svg-legend'
import d3Tip from 'd3-tip'
import './Exoplanets.css'
import bg from './images/starryBGTile.jpg'
import data from './exoplanetData.csv'
import solarSystemData from './solarSystemData'
import habitablePlanets from './habitablePlanets'

function createTooltips() {
  return d3Tip()
    .attr('class', 'd3-tip')
    .offset(() => [-10, 0])
    .html(d => {
      if (d.image) {
        return (
          '<h1>' +
          d.pl_name +
          '</h1>' +
          '<dl>' +
          '<dt>Orbit Distance</dt><dd>' +
          d.pl_orbsmax +
          '</dd>' +
          '<dt>Orbital Period</dt><dd>' +
          d.pl_orbper +
          '</dd>' +
          '<dt>Radius</dt><dd>' +
          d.pl_radj +
          '</dd>' +
          '<dt>Planet Surface Temp</dt><dd>' +
          d.pl_eqt +
          '</dd>' +
          '<dt>Star Temp</dt><dd>' +
          d.st_teff +
          '</dd>' +
          '<dt>Year Discovered</dt><dd>' +
          d.pl_disc +
          '</dd>' +
          '</dl>'
        )
      } else {
        return (
          '<h1>' +
          d.pl_name +
          '</h1>' +
          '<dl>' +
          '<dt>Orbit Distance</dt><dd>' +
          d.pl_orbsmax +
          '</dd>' +
          '<dt>Orbital Period</dt><dd>' +
          d.pl_orbper +
          '</dd>' +
          '<dt>Radius</dt><dd>' +
          d.pl_radj +
          '</dd>' +
          '<dt>Planet Equilibrium Temp</dt><dd>' +
          d.pl_eqt +
          '</dd>' +
          '<dt>Stellar Distance</dt><dd>' +
          d.st_dist +
          '</dd>' +
          '<dt>Star Temp</dt><dd>' +
          d.st_teff +
          '</dd>' +
          '<dt>Year Discovered</dt><dd>' +
          d.pl_disc +
          '</dd>' +
          '</dl>'
        )
      }
    })
}

const createExoplanetsViz = () => {
  const options = {
    fullscreen: false,
    showHabitableOnly: false,
  }
  const { width, height } = getDimensions()
  const axisPadding = 50

  const svg = d3
    .select('#exoplanets-viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const tip = createTooltips()
  svg.call(tip)

  // create defs
  const defs = svg.append('defs')

  const gradient = defs
    .append('linearGradient')
    .attr('id', 'gradient')
    .attr('x1', '50%')
    .attr('y1', '100%')
    .attr('x2', '50%')
    .attr('y2', '0%')
    .attr('spreadMethod', 'pad')

  gradient
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', '#FF0000')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '20%')
    .attr('stop-color', '#FFA500')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '40%')
    .attr('stop-color', '#FFFF00')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '60%')
    .attr('stop-color', '#FFFFFF')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '80%')
    .attr('stop-color', '#CCCCFF')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '90%')
    .attr('stop-color', '#6666FF')
    .attr('stop-opacity', 1)

  gradient
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', '#0000FF')
    .attr('stop-opacity', 1)

  const filter = defs.append('filter').attr('id', 'glow')

  filter
    .append('feGaussianBlur')
    .attr('class', 'blur')
    .attr('stdDeviation', '4.5')
    .attr('result', 'coloredBlur')

  var feMerge = filter.append('feMerge')
  feMerge.append('feMergeNode').attr('in', 'coloredBlur')
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic')

  const container = svg
    .append('g')
    .attr('id', 'container')
    .attr('width', width)
    .attr('transform', 'translate(' + 0 + ', ' + 0 + ')')

  svg
    .select('defs')
    .append('pattern')
    .attr('id', 'bg-pattern')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', 320)
    .attr('height', 180)
    .append('svg:image')
    .attr('xlink:href', bg)
    .attr('width', 320)
    .attr('height', 180)
    .attr('x', 0)
    .attr('y', 0)

  const background = container
    .append('rect')
    .attr('id', 'background')
    .attr('x', width * -500)
    .attr('width', width * 1000)
    .attr('height', height)
    .attr('fill', 'url(#bg-pattern)')

  const dataPoints = container
    .append('g')
    .attr('class', 'data-points')
    .attr('transform', 'translate(' + 0 + ', ' + height / 2 + ')')

  const xScale = d3.scaleLinear()
  const xAxis = d3.axisBottom()

  const stellerTempScale = d3.scaleLinear()
  const planetTempScale = d3.scaleLinear()

  const stellerTempLegend = legendColor()

  let transform

  d3.csv(data, type).then(data => {
    data = data
      .filter(x => x.pl_orbsmax > 0) // dont show exoplanets with missing orbsmax (filter this from raw data on next data update)
      .sort((a, b) => b.pl_radj - a.pl_radj)

    window.addEventListener('resize', () => draw(data))

    xScale.domain([0, d3.max(data, d => d.pl_orbsmax)]).range([0, width])

    xAxis.scale(xScale).tickFormat(d => (d < 0 ? '' : d3.format('')(d)))

    container
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(' + 0 + ', ' + (height - axisPadding) + ')')
      .append('text')
      .attr('id', 'xAxisTitle')
      .style('text-anchor', 'middle')
      .text('Orbit Semi-Major Axis (AU)')

    // create planet temp legend
    const legendHeight = height / 4
    const legendIconRadius = legendHeight / 9

    stellerTempScale
      .domain([
        d3.min(data, d => d.st_teff),
        5000,
        6000,
        7500,
        10000,
        30000,
        60000,
      ])
      .range([
        '#FF0000',
        '#FFA500',
        '#FFFF00',
        '#FFFFFF',
        '#CCCCFF',
        '#6666FF',
        '#0000FF',
      ])

    planetTempScale
      .domain([
        d3.min(data, d => d.pl_eqt),
        184,
        294,
        330,
        400,
        d3.max(data, d => d.pl_eqt),
      ])
      .range(['#78D5E3', '#00FFAA', '#00CC00', '#CCF000', '#CC6900', '#800000'])

    const legendContainer = container
      .append('g')
      .attr('id', 'planetTempLegend')
      .attr('transform', 'translate(0, ' + (legendIconRadius + 32) + ')')

    legendContainer
      .append('rect')
      .style('fill', 'black')
      .style('stroke', 'white')
      .attr('width', 230)
      .attr('height', legendHeight)
      .attr('transform', 'translate(0, ' + (-legendIconRadius - 32) + ')')

    const planetTempLegend = legendColor()
      .labels(['0 Kelvin (K)', '294 K (Earth Temperature)', '2550 K'])
      .shape('circle')
      .shapeRadius(legendIconRadius)
      .shapePadding(5)
      .cells([0, 294, 2550])
      .orient('vertical')
      .scale(planetTempScale)

    container
      .select('#planetTempLegend')
      .append('text')
      .attr('class', 'legendTitle')
      .attr(
        'transform',
        'translate(' + 5 + ', ' + (-legendIconRadius - 16) + ')'
      )
      .text('Exoplanet Temperature')

    container.select('#planetTempLegend').call(planetTempLegend)

    // create steller temp legend
    container
      .append('g')
      .attr('id', 'stellerTempLegend')
      .attr('transform', 'translate(0, ' + (height - 100) + ')')

    stellerTempLegend
      .labels([
        'M < 3,500K',
        'K 3,500 - 5,000K',
        'G 5,000 - 6,000K',
        'F 6,000 - 7,500K',
        'A 7,500 - 10,000K',
        'B 10,000 - 30,000K',
        'O 30,000 - 60,000K',
      ])
      .shapeWidth(width / 7)
      .shapePadding(0)
      .cells([3000, 5000, 6000, 7500, 10000, 30000, 60000])
      .orient('horizontal')
      .scale(stellerTempScale)

    container
      .select('#stellerTempLegend')
      .append('text')
      .attr('class', 'legendTitle')
      .attr('transform', 'translate(' + 5 + '' + -5 + ')')
      .text('Host Star Spectral Classification and Temperature')

    container.select('#stellerTempLegend').call(stellerTempLegend)

    draw(data)
  })

  // sets the value field of the csv data to be an integer instead of a string
  function type(d) {
    d.pl_orbsmax = +d.pl_orbsmax
    d.pl_orbsper = +d.pl_orbsper
    d.pl_radj = +d.pl_radj
    d.pl_eqt = +d.pl_eqt
    d.st_dist = +d.st_dist
    d.st_teff = +d.st_teff
    return d
  }

  function getDimensions() {
    return {
      width: options.fullscreen
        ? document.documentElement.clientWidth
        : d3.select('#exoplanets-viz').node().clientWidth,
      height: options.fullscreen
        ? document.documentElement.clientHeight
        : d3.select('#exoplanets-viz').node().clientHeight,
    }
  }

  function draw(data) {
    const fullData = data
    const { width, height } = getDimensions()

    svg.attr('width', width).attr('height', height)

    container
      .select('#stellerTempLegend')
      .attr('transform', 'translate(0, ' + (height - 100) + ')')
      .attr('width', width)
      .call(stellerTempLegend)

    container
      .select('.x.axis')
      .attr('transform', 'translate(' + 0 + ', ' + (height - axisPadding) + ')')
      .call(xAxis)

    container
      .select('.x.axis text')
      .attr('x', width / 2)
      .attr('y', 40)

    dataPoints.attr('transform', 'translate(' + 0 + ', ' + height / 2 + ')')

    xScale.range([0, width])

    stellerTempLegend
      .labels([
        'M < 3,500K',
        'K 3,500 - 5,000K',
        'G 5,000 - 6,000K',
        'F 6,000 - 7,500K',
        'A 7,500 - 10,000K',
        'B 10,000 - 30,000K',
        'O 30,000 - 60,000K',
      ])
      .shapeWidth(width / 7)
      .shapePadding(0)
      .cells([3000, 5000, 6000, 7500, 10000, 30000, 60000])
      .orient('horizontal')
      .scale(stellerTempScale)

    let xt = xScale
    if (transform) {
      xt = transform.rescaleX(xScale)
      svg.select('.x.axis').call(xAxis.scale(xt))
    }

    svg.call(d3.zoom().on('zoom', zoomed.bind(this)))

    if (options.showHabitableOnly) {
      data = data.filter(x => habitablePlanets.includes(x.pl_name))
    }

    const exoplanetRadiusScale = d3
      .scaleLinear()
      .domain([0, d3.max(fullData, d => d.pl_radj)])
      .range([0, 200])

    const nodes = dataPoints
      .selectAll('circle')
      .data(data, d => d.pl_name)
      .join(
        enter =>
          enter
            .append('circle')
            .attr(
              'transform',
              d => 'translate(' + xt(d.pl_orbsmax) + ',' + 0 + ')'
            )
            .style('filter', 'url(#glow)')
            .style('pointer-events', 'all')
            .style('fill', d => {
              if (!d.image && d.pl_eqt) {
                return planetTempScale(d.pl_eqt)
              } else if (d.image) {
                return 'none'
              } else {
                return 'black'
              }
            })
            .style('stroke-width', 2)
            .style('stroke', d =>
              !d.image ? stellerTempScale(d.st_teff) : 'none'
            )
            .attr('r', 0)
            .on('mouseenter', d => {
              d3.select(d3.event.currentTarget)
                .style('stroke', 'blue')
                .style('stroke-width', 2)

              tip.show(d, d3.event.currentTarget)
            })
            .on('mouseleave', d => {
              d3.select(d3.event.currentTarget)
                .style('stroke', d =>
                  !d.image ? stellerTempScale(d.st_teff) : 'none'
                )
                .style('stroke-width', 2)

              tip.hide(d, d3.event.currentTarget)
            })
            .call(enter =>
              enter
                .transition()
                .duration(500)
                .attr('r', d => exoplanetRadiusScale(d.pl_radj))
            ),
        update =>
          update.attr(
            'transform',
            d => 'translate(' + xt(d.pl_orbsmax) + ',' + 0 + ')'
          ),
        exit =>
          exit.call(exit =>
            exit
              .transition()
              .attr('r', 0)
              .remove()
          )
      )

    const ssNodes = dataPoints
      .selectAll('image')
      .data(solarSystemData)
      .join(enter =>
        enter
          .append('image')
          .attr('xlink:href', d => d.image)
          .attr('height', d => {
            // Cheat the size if Saturn, because of the rings. Don't tell anyone.
            if (d.pl_name === 'Saturn') {
              return exoplanetRadiusScale(d.pl_radj) * 3.5
            } else {
              return exoplanetRadiusScale(d.pl_radj) * 2
            }
          })
          .attr('width', d => {
            // Cheat the size if Saturn, because of the rings. Don't tell anyone.
            if (d.pl_name === 'Saturn') {
              return exoplanetRadiusScale(d.pl_radj) * 3.5
            } else {
              return exoplanetRadiusScale(d.pl_radj) * 2
            }
          })
          .attr('x', function() {
            return -(d3.select(this).attr('width') / 2)
          })
          .attr('y', function(d) {
            // Cheat the size if Saturn, because of the rings. Don't tell anyone.
            return d.pl_name === 'Saturn'
              ? -(d3.select(this).attr('height') / 2) - 4
              : -(d3.select(this).attr('height') / 2)
          })
          .on('mouseenter', d => {
            d3.select(d3.event.currentTarget)
              .style('stroke', 'blue')
              .style('stroke-width', 2)

            tip.show(d, d3.event.currentTarget)
          })
          .on('mouseleave', d => {
            d3.select(d3.event.currentTarget)
              .style('stroke', d =>
                !d.image ? stellerTempScale(d.st_teff) : 'none'
              )
              .style('stroke-width', 5)

            tip.hide(d, d3.event.currentTarget)
          })
      )

    function zoomed() {
      transform = d3.event.transform
      background.attr('transform', `translate(${-transform.x / 10}, 0)`)

      const xt = transform.rescaleX(xScale)
      svg.select('.x.axis').call(xAxis.scale(xt))
      ssNodes.attr(
        'transform',
        d => 'translate(' + xt(d.pl_orbsmax) + ',' + 0 + ')'
      )
      nodes.attr(
        'transform',
        d => 'translate(' + xt(d.pl_orbsmax) + ',' + 0 + ')'
      )
    }

    const dismissHelp = document.getElementById('dismiss-help')
    const desc = document.getElementById('exoplanet-description')
    dismissHelp.onclick = () => {
      desc.classList.add('dismissed')
    }

    document.getElementsByClassName(
      'cb-habitable'
    )[0].onchange = showHabitableOnly

    function showHabitableOnly() {
      options.showHabitableOnly = !options.showHabitableOnly
      draw(fullData)
    }
  }
}

export default createExoplanetsViz
