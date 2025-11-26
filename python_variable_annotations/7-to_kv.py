#!/usr/bin/env python3
"""
Convert a string and a float to a tuple
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Convert a string and a float to a tuple
    """
    return (k, v**2)
