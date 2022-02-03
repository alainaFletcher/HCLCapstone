package com.hcl.fletcher.ppmtool.repositories;

import com.hcl.fletcher.ppmtool.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
