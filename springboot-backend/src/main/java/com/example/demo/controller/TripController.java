package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Trip;
import com.example.demo.repository.TripsRepository;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1")
public class TripController {

	@Autowired
	private TripsRepository tripsRepository;

	// get All
	@GetMapping("/trips")
	public List<Trip> getAllTrips() {
		return tripsRepository.findAll();
	}

	// Create Trips
	@PostMapping("/trips")
	public Trip createTrip(@RequestBody Trip tripRequest) {

		return tripsRepository.save(tripRequest);

	}

	// Get Trip By ID
	@GetMapping("/trips/{id}")
	public ResponseEntity<Trip> getTripById(@PathVariable Long id) {

		Trip tripRequest = tripsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Trip Not Found !!" + id));

		return ResponseEntity.ok(tripRequest);

	}

	// Update Trip
	@PutMapping("/trips/{id}")
	public ResponseEntity<Trip> upadateTrip(@PathVariable Long id, @RequestBody Trip tripDetails) {

		Trip tripRequest = tripsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Trip Not Found !!" + id));

		tripRequest.setTripId(tripDetails.getTripId());
		tripRequest.setTripTitle(tripDetails.getTripTitle());
		tripRequest.setTripDescription(tripDetails.getTripDescription());
		tripRequest.setStartDate(tripDetails.getStartDate());
		tripRequest.setEndDate(tripDetails.getEndDate());
		tripRequest.setTripDestination(tripDetails.getTripDestination());
		tripRequest.setTripBudget(tripDetails.getTripBudget());
		tripRequest.setTripOrganizer(tripDetails.getTripOrganizer());

		Trip updatedTripRequest = tripsRepository.save(tripRequest);
		return ResponseEntity.ok(updatedTripRequest);

	}

	// Delete Trip
	@DeleteMapping("/trips/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTrip(@PathVariable Long id) {

		Trip tripRequest = tripsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Trip Not Found !!" + id));

		tripsRepository.delete(tripRequest);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

}
